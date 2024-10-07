# Crear un objeto PDF nuevamente
pdf = FPDF(orientation='P', unit='mm', format='A4')
pdf.set_auto_page_break(auto=True, margin=10)
pdf.add_page()

# Definir el encabezado de la tabla
header = ['Decimal', 'Octal', 'Hexadecimal', 'Binario', 'ASCII']

# Añadir el título
pdf.set_font("Arial", size=12, style='B')
pdf.cell(0, 10, 'Tabla de Números del 0 al 255 en diferentes formatos', ln=True, align='C')
pdf.ln(10)

# Establecer la fuente para la tabla
pdf.set_font("Arial", size=8)

# Ancho de las columnas
column_widths = [20, 20, 25, 60, 15]

# Añadir encabezado de la tabla
for i, h in enumerate(header):
    pdf.cell(column_widths[i], 10, h, border=1, align='C')
pdf.ln()

# Añadir los datos a la tabla sin los prefijos 0o, 0x, 0b
for i in range(256):
    decimal = str(i)
    octal = oct(i)[2:]  # Eliminar el '0o' del inicio
    hexadecimal = hex(i)[2:].upper()  # Eliminar el '0x' del inicio y poner en mayúsculas
    binario = bin(i)[2:]  # Eliminar el '0b' del inicio
    ascii_char = chr(i) if 32 <= i <= 126 else ''
    
    row = [decimal, octal, hexadecimal, binario, ascii_char]
    
    for j, item in enumerate(row):
        pdf.cell(column_widths[j], 7, item, border=1, align='C')
    pdf.ln()

# Guardar el archivo PDF
pdf_file_path_clean = '/mnt/data/numeros_0_a_255_sin_prefijos.pdf'
pdf.output(pdf_file_path_clean)

pdf_file_path_clean