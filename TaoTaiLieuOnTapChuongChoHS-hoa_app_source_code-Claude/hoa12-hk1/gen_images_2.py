import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Rectangle, FancyBboxPatch, RegularPolygon
import numpy as np
import os

os.makedirs("img", exist_ok=True)
NAVY = "#1F3864"; TEAL = "#0F6E56"; CORAL = "#993C1D"; GRAY = "#5F5E5A"
LIGHTBLUE = "#DCE6F1"; LIGHTGREEN = "#EAF3DE"; LIGHTAMBER = "#FBECD3"
plt.rcParams["font.family"] = "DejaVu Sans"

def save(fig, name):
    fig.savefig(f"img/{name}.png", dpi=190, bbox_inches="tight", pad_inches=0.15, transparent=True)
    plt.close(fig)

# 9. Cau truc glucose: mach ho va mach vong
fig, axs = plt.subplots(1, 2, figsize=(9.5, 3.6))
ax = axs[0]; ax.set_xlim(0, 10); ax.set_ylim(0, 3); ax.axis("off")
ax.text(0.6, 1.6, "CH2OH", ha="left", fontsize=9.5, color=NAVY, fontweight="bold")
chain = "–CHOH–CHOH–CHOH–CHOH–CHO"
ax.text(0.4, 1.0, "|", ha="left", fontsize=9, color=GRAY)
ax.text(0.6, 0.5, chain, ha="left", fontsize=9.3, color=TEAL, fontweight="bold")
ax.text(5, 2.6, "Dạng mạch hở (polyhydroxy aldehyde)", ha="center", fontsize=9.7, color=NAVY, fontweight="bold")
ax.text(5, 0.05, "5 nhóm –OH  +  1 nhóm –CHO", ha="center", fontsize=8.3, color=GRAY)
ax = axs[1]; ax.set_xlim(-2, 2); ax.set_ylim(-2, 2.4); ax.set_aspect("equal"); ax.axis("off")
hexagon = RegularPolygon((0,0), numVertices=6, radius=1.3, orientation=np.pi/6, fc=LIGHTAMBER, ec=CORAL, lw=1.6)
ax.add_patch(hexagon)
labels = ["O","C1","C2","C3","C4","C5"]
for i, lab in enumerate(labels):
    ang = np.pi/6 + i*np.pi/3
    x, y = 1.3*np.cos(ang), 1.3*np.sin(ang)
    ax.text(x, y, lab, ha="center", va="center", fontsize=8.5, color=NAVY, fontweight="bold")
ax.text(0, -1.9, "Dạng mạch vòng (α/β-glucose)", ha="center", fontsize=9.7, color=NAVY, fontweight="bold")
save(fig, "09_glucose_structure")

# 10. Cau truc amino acid - dang phan tu va zwitterion
fig, ax = plt.subplots(figsize=(8, 3))
ax.set_xlim(0, 12); ax.set_ylim(0, 3); ax.axis("off")
ax.text(2, 1.7, "H2N–CH(R)–COOH", ha="center", fontsize=12, color=NAVY, fontweight="bold")
ax.text(2, 1.1, "dạng phân tử trung hoà", ha="center", fontsize=8.5, color=GRAY)
ax.annotate("", xy=(6.4,1.7), xytext=(4.4,1.7), arrowprops=dict(arrowstyle="<->", color=CORAL, lw=1.8))
ax.text(5.4, 2.05, "chuyển H⁺ nội phân tử", ha="center", fontsize=8, color=CORAL)
ax.text(9.4, 1.7, "H3N⁺–CH(R)–COO⁻", ha="center", fontsize=12, color=TEAL, fontweight="bold")
ax.text(9.4, 1.1, "dạng ion lưỡng cực (zwitterion)", ha="center", fontsize=8.5, color=GRAY)
ax.text(6, 2.6, "Hai dạng tồn tại của amino acid trong dung dịch", ha="center", fontsize=10.3, color=NAVY, fontweight="bold")
save(fig, "10_aminoacid_structure")

# 11. Cau truc amine: methylamine vs aniline
fig, axs = plt.subplots(1, 2, figsize=(8.5, 3.4))
ax = axs[0]; ax.set_xlim(-2,2); ax.set_ylim(-2,2); ax.set_aspect("equal"); ax.axis("off")
ax.text(0, 0.3, "CH3–NH2", ha="center", fontsize=13, color=NAVY, fontweight="bold")
ax.annotate("cặp electron tự do\nđược đẩy về N\n(tính base tăng)", xy=(0.6,0.35), xytext=(-1.9,-1.4),
            fontsize=8, color=TEAL, arrowprops=dict(arrowstyle="->", color=TEAL))
ax.set_title("Methylamine (amine béo)", fontsize=10, color=NAVY)
ax = axs[1]; ax.set_xlim(-2.4,2.4); ax.set_ylim(-2.2,2.2); ax.set_aspect("equal"); ax.axis("off")
hexagon = RegularPolygon((0,0.1), numVertices=6, radius=1.1, orientation=0, fc=LIGHTBLUE, ec=NAVY, lw=1.5)
ax.add_patch(hexagon)
ax.text(0,0.1,"vòng\nbenzene", ha="center", va="center", fontsize=7.5, color=NAVY)
ax.text(0,1.75,"NH2", ha="center", fontsize=11, color=CORAL, fontweight="bold")
ax.annotate("cặp electron bị hút\nvào vòng benzene\n(tính base giảm)", xy=(0,1.5), xytext=(-2.3,-1.9),
            fontsize=8, color=CORAL, arrowprops=dict(arrowstyle="->", color=CORAL))
ax.set_title("Aniline (amine thơm)", fontsize=10, color=NAVY)
save(fig, "11_amine_structure")

# 12. Mot so monomer va polymer tuong ung
fig, ax = plt.subplots(figsize=(8.5, 3.6))
ax.set_xlim(0, 12); ax.set_ylim(0, 5); ax.axis("off")
rows = [
    (4.2, "CH2=CH2", "(–CH2–CH2–)n", "PE (polyethylene)"),
    (2.6, "CH2=CH–Cl", "(–CH2–CHCl–)n", "PVC (poly vinyl chloride)"),
    (1.0, "CH2=CH–CH3", "(–CH2–CH(CH3)–)n", "PP (polypropylene)"),
]
for y, mono, poly, name in rows:
    ax.text(1.2, y, mono, ha="left", fontsize=10.5, color=NAVY, fontweight="bold")
    ax.annotate("", xy=(6.0,y), xytext=(4.6,y), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.6))
    ax.text(6.3, y, poly, ha="left", fontsize=10, color=TEAL, fontweight="bold")
    ax.text(10.6, y, name, ha="center", fontsize=8.3, color=GRAY)
ax.text(6, 4.75, "Một số monomer thường gặp và polymer tương ứng (phản ứng trùng hợp)", ha="center", fontsize=10, color=NAVY, fontweight="bold")
save(fig, "12_monome_polymer")

print("done:", sorted([f for f in os.listdir("img") if f.startswith(("09","10","11","12"))]))
