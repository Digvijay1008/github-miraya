Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem "c:\Users\Lenovo\OneDrive\Desktop\trishabh miraya\images" | Where-Object { $_.Length -gt 1MB -and ($_.Extension -match "\.jpg|\.jpeg|\.png") }

foreach ($file in $files) {
    try {
        $path = $file.FullName
        Write-Host "Processing $($file.Name) ($([math]::Round($file.Length / 1MB, 2)) MB)"
        
        # Load image
        $fs = New-Object System.IO.FileStream($path, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read)
        $bmp = [System.Drawing.Image]::FromStream($fs)
        
        $newWidth = $bmp.Width
        $newHeight = $bmp.Height
        $needsResize = $false
        
        if ($newWidth -gt 1600) {
            $ratio = 1600.0 / $newWidth
            $newWidth = 1600
            $newHeight = [math]::Round($bmp.Height * $ratio)
            $needsResize = $true
        }
        
        if ($needsResize) {
            $newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $g = [System.Drawing.Graphics]::FromImage($newBmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.DrawImage($bmp, 0, 0, $newWidth, $newHeight)
            $g.Dispose()
        } else {
            $newBmp = New-Object System.Drawing.Bitmap($bmp)
        }
        
        $bmp.Dispose()
        $fs.Close()
        
        $tmpPath = $path + ".tmp"
        
        if ($file.Extension -match "\.jpg|\.jpeg") {
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
            $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]75)
            $newBmp.Save($tmpPath, $codec, $ep)
        } else {
            $newBmp.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Png)
        }
        
        $newBmp.Dispose()
        
        Move-Item -Path $tmpPath -Destination $path -Force
        $newSize = (Get-Item $path).Length
        Write-Host "Saved $($file.Name). New size: $([math]::Round($newSize / 1MB, 2)) MB"
    } catch {
        Write-Host "Failed to process $($file.Name): $_"
    }
}
