import os
import io

from PyPDF2 import PdfFileWriter, PdfFileReader
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

def create_folder(id):
    path = "assets/" + str(id)
    exists = os.path.exists(path)
    folderCreated: bool

    if not exists:

        os.makedirs(path)
        folderCreated = True

    else:

        folderCreated = False
    
    return folderCreated

def create_document(documentID, propertie1, propertie2, propertie3):
    documentCreated: bool

    if create_folder(documentID):
        packet = io.BytesIO()

        can = canvas.Canvas(packet, pagesize=letter)
        can.setFillColorRGB(1, 0, 0)
        can.setFont("Times-Roman", 14)
        can.drawString(100, 455, propertie1)
        can.drawString(100, 435, propertie2)
        can.drawString(100, 415, propertie3)
        can.save()

        packet.seek(0)
        new_pdf = PdfFileReader(packet)

        existing_pdf = PdfFileReader(open("og_pdf.pdf", "rb"))
        output = PdfFileWriter()

        page = existing_pdf.getPage(0)
        page.mergePage(new_pdf.getPage(0))
        output.addPage(page)

        outputStream = open(f"assets/{documentID}/modificated_pdf.pdf", "wb")
        output.write(outputStream)
        outputStream.close()

        documentCreated = True

    else:
        documentCreated = False

    return documentCreated