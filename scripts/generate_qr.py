#!/usr/bin/env python3
"""
generate_qr.py - High-Res Direct Google Play Store QR Code Generator for SecuBuzz
Encodes: https://play.google.com/store/apps/details?id=com.secubuzz.app
Outputs:
  - assets/qr.png
  - website/public/qr.png
  - website/dist/qr.png

Permanent direct URL (zero redirect services, never expires).
"""

import os
import qrcode
import numpy as np
from PIL import Image
import cv2

TARGET_URL = "https://secubuzz.com/qr"
DESTINATIONS = [
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "qr.png")),
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "website", "public", "qr.png")),
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "website", "dist", "qr.png")),
]

def generate_qr():
    print(f"[QR Gen] Generating direct QR code for: {TARGET_URL}")

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=1,
        border=0,
    )
    qr.add_data(TARGET_URL)
    qr.make(fit=True)
    matrix = qr.get_matrix()
    n_modules = len(matrix)
    print(f"[QR Gen] QR Matrix dimensions: {n_modules}x{n_modules} modules")

    module_px = 52
    qr_px = n_modules * module_px
    total_size = 2048
    pad = (total_size - qr_px) // 2


    # High-res 2048x2048 image with clean white background
    img = Image.new("RGB", (total_size, total_size), (255, 255, 255))
    pixels = img.load()

    for r in range(n_modules):
        for c in range(n_modules):
            if matrix[r][c]:
                for y in range(pad + r * module_px, pad + (r + 1) * module_px):
                    for x in range(pad + c * module_px, pad + (c + 1) * module_px):
                        pixels[x, y] = (0, 0, 0)

    # Verification via OpenCV QRCodeDetector
    arr = np.array(img)
    detector = cv2.QRCodeDetector()
    decoded_url, bbox, _ = detector.detectAndDecode(arr)

    if decoded_url != TARGET_URL:
        raise ValueError(f"Verification failed! Decoded '{decoded_url}' does not match '{TARGET_URL}'")

    print(f"[QR Gen] Verification PASSED: Decoded directly to '{decoded_url}'")

    # Save to all target locations
    for dest in DESTINATIONS:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        img.save(dest, format="PNG", optimize=True)
        size_kb = os.path.getsize(dest) / 1024
        print(f"[QR Gen] Saved {dest} ({size_kb:.1f} KB)")

if __name__ == "__main__":
    generate_qr()
