import fitz  # PyMuPDF
import os

def extract_pdf_pages_as_images(pdf_path, output_folder, dpi=300):
    """
    Renders each page of a PDF as a high-quality image.
    Ideal for large PDFs where you need the 'full image' of each page.
    """
    print(f"Opening PDF: {pdf_path}")
    print(f"This might take a moment for a 700MB file...")
    
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Open the PDF document
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error opening PDF: {e}")
        return

    print(f"Successfully opened! Total pages: {len(doc)}")

    # Iterate through every page
    for page_num in range(len(doc)):
        print(f"Processing page {page_num + 1} of {len(doc)}...")
        page = doc.load_page(page_num)
        
        # Set the zoom/resolution (300 DPI is standard for high quality)
        zoom = dpi / 72.0
        mat = fitz.Matrix(zoom, zoom)
        
        # Render the page to a pixmap (image)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        
        # Save the image
        output_filename = os.path.join(output_folder, f"page_{page_num + 1}.jpg")
        pix.save(output_filename)
        print(f"Saved: {output_filename}")

    doc.close()
    print("Done! All pages have been extracted as images.")

if __name__ == "__main__":
    # Your specific PDF path
    PDF_FILE = r"c:\Users\Lenovo\OneDrive\Desktop\trishabh miraya\new past project miraya site.pdf"
    
    # Output folder on your desktop
    OUTPUT_DIR = r"c:\Users\Lenovo\OneDrive\Desktop\trishabh miraya\extracted_pdf_images"
    
    # Run the extraction (using 150 DPI to balance quality and speed/memory for a 700MB file)
    # You can increase this to 300 if you need extreme high quality
    extract_pdf_pages_as_images(PDF_FILE, OUTPUT_DIR, dpi=150)
