import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import Circle, Ellipse, Rectangle, FancyBboxPatch
import numpy as np
import os

os.makedirs("img", exist_ok=True)

NAVY = "#1F3864"
TEAL = "#0F6E56"
CORAL = "#993C1D"
GRAY = "#5F5E5A"
LIGHTBLUE = "#DCE6F1"
LIGHTGREEN = "#EAF3DE"
LIGHTAMBER = "#FBECD3"
LIGHTPINK = "#F7E0E9"

plt.rcParams["font.family"] = "DejaVu Sans"

def save(fig, name):
    fig.savefig(f"img/{name}.png", dpi=190, bbox_inches="tight", pad_inches=0.15, transparent=True)
    plt.close(fig)

# 1. Phan ung este hoa - thuy phan (thuan nghich)
fig, ax = plt.subplots(figsize=(8, 2.6))
ax.set_xlim(0, 12); ax.set_ylim(0, 3); ax.axis("off")
ax.text(1.3, 1.6, "R–COOH", ha="center", fontsize=13, color=NAVY, fontweight="bold")
ax.text(1.3, 1.0, "(acid)", ha="center", fontsize=9, color=GRAY)
ax.text(3.0, 1.6, "+", ha="center", fontsize=15, color=GRAY)
ax.text(4.6, 1.6, "R'OH", ha="center", fontsize=13, color=NAVY, fontweight="bold")
ax.text(4.6, 1.0, "(alcohol)", ha="center", fontsize=9, color=GRAY)
ax.annotate("", xy=(7.6, 1.75), xytext=(5.9, 1.75), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.8))
ax.annotate("", xy=(5.9, 1.45), xytext=(7.6, 1.45), arrowprops=dict(arrowstyle="->", color=TEAL, lw=1.8))
ax.text(6.75, 2.15, "H2SO4 đặc, t°", ha="center", fontsize=8.5, color=CORAL)
ax.text(6.75, 1.05, "H2O, H⁺ (thuỷ phân)", ha="center", fontsize=8.5, color=TEAL)
ax.text(9.4, 1.6, "R–COO–R'", ha="center", fontsize=13, color=NAVY, fontweight="bold")
ax.text(9.4, 1.0, "(ester)", ha="center", fontsize=9, color=GRAY)
ax.text(11.2, 1.6, "+", ha="center", fontsize=15, color=GRAY)
ax.text(11.7,1.6, "", ha="center")
ax.text(6.75, 2.65, "Phản ứng ester hoá (thuận nghịch) và phản ứng thuỷ phân ester", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
ax.text(9.4, 0.4, "(+ H2O sinh ra ở chiều thuận)", ha="center", fontsize=8, color=GRAY)
save(fig, "01_este_hoa")

# 2. Cau tao chat beo (triglyceride)
fig, ax = plt.subplots(figsize=(7, 3.4))
ax.set_xlim(0, 11); ax.set_ylim(0, 5); ax.axis("off")
ys = [3.8, 2.5, 1.2]
for y in ys:
    ax.add_patch(Circle((1, y), 0.3, fc=LIGHTBLUE, ec=NAVY, lw=1.5))
ax.text(1, 4.5, "glycerol\n(C3H5)", ha="center", fontsize=9, color=NAVY, fontweight="bold")
ax.plot([1,1],[3.5,2.8], color=NAVY, lw=1.3)
ax.plot([1,1],[2.2,1.5], color=NAVY, lw=1.3)
for y in ys:
    ax.plot([1.3, 2.3], [y, y], color=GRAY, lw=1.3)
    ax.text(2.6, y, "O–CO–R", ha="left", va="center", fontsize=10.5, color=TEAL, fontweight="bold")
ax.text(6.6, 4.6, "3 gốc acid béo (R-COO-)", ha="left", fontsize=9.5, color=TEAL, fontweight="bold")
ax.text(1, 0.4, "Chất béo = ester của glycerol và acid béo (triglyceride)", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
save(fig, "02_chatbeo")

# 3. Co che giat rua - micelle
fig, ax = plt.subplots(figsize=(7.4, 3.6))
ax.set_xlim(0, 11); ax.set_ylim(0, 5); ax.axis("off")
ax.add_patch(Circle((2.2, 2.5), 1.0, fc="#F5D9A0", ec=CORAL, lw=1.5))
ax.text(2.2, 2.5, "vết\ndầu mỡ", ha="center", va="center", fontsize=8.5, color=CORAL, fontweight="bold")
n = 10
for i in range(n):
    ang = 2*np.pi*i/n
    x0, y0 = 2.2 + 1.0*np.cos(ang), 2.5 + 1.0*np.sin(ang)
    x1, y1 = 2.2 + 1.75*np.cos(ang), 2.5 + 1.75*np.sin(ang)
    ax.plot([x0,x1],[y0,y1], color=NAVY, lw=1.6)
    ax.add_patch(Circle((x1,y1), 0.14, fc=TEAL, ec=NAVY, lw=0.8, zorder=5))
ax.text(2.2, 4.7, "Mixen (micelle): đầu ưa nước hướng ra ngoài,\nđuôi kị nước hoà vào vết bẩn dầu mỡ", ha="center", fontsize=9, color=NAVY, fontweight="bold")
ax.add_patch(Circle((7.6, 2.9), 0.12, fc=TEAL, ec=NAVY, lw=0.8))
ax.plot([7.6,8.3],[2.9,2.9], color=NAVY, lw=1.6)
ax.text(9.2, 2.9, "đầu ưa nước\n(–COO⁻Na⁺)", ha="left", va="center", fontsize=8, color=TEAL)
ax.add_patch(Circle((7.6, 2.0), 0.12, fc=TEAL, ec=NAVY, lw=0.8))
ax.plot([7.6,8.3],[2.0,2.0], color=NAVY, lw=1.6)
ax.text(9.2, 2.0, "đuôi kị nước\n(gốc hydrocarbon dài)", ha="left", va="center", fontsize=8, color=GRAY)
save(fig, "03_giatrua_mixen")

# 4. Phan loai carbohydrate
fig, ax = plt.subplots(figsize=(8, 3))
ax.set_xlim(0, 12); ax.set_ylim(0, 3); ax.axis("off")
boxes = [
    (1.5, "Monosaccharide", "Glucose, Fructose", LIGHTBLUE, TEAL),
    (6, "Disaccharide", "Saccharose, Maltose", LIGHTGREEN, TEAL),
    (10.3, "Polysaccharide", "Tinh bột, Cellulose", LIGHTAMBER, CORAL),
]
for x, t, ex, c1, c2 in boxes:
    ax.add_patch(FancyBboxPatch((x-1.5, 1.1), 3, 1.1, boxstyle="round,pad=0.05", fc=c1, ec=c2, lw=1.4))
    ax.text(x, 1.85, t, ha="center", fontsize=10, color=NAVY, fontweight="bold")
    ax.text(x, 1.35, ex, ha="center", fontsize=8.5, color=GRAY)
ax.annotate("", xy=(4.4,1.65), xytext=(3.1,1.65), arrowprops=dict(arrowstyle="->", color=GRAY, lw=1.2))
ax.text(3.75, 1.95, "kết hợp", ha="center", fontsize=7.5, color=GRAY)
ax.annotate("", xy=(8.7,1.65), xytext=(7.6,1.65), arrowprops=dict(arrowstyle="->", color=GRAY, lw=1.2))
ax.text(8.15, 1.95, "trùng hợp\nnhiều đơn vị", ha="center", fontsize=7.5, color=GRAY)
ax.text(6, 2.75, "Phân loại carbohydrate theo số đơn vị monosaccharide", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
save(fig, "04_phanloai_carbohydrate")

# 5. Lien ket peptide
fig, ax = plt.subplots(figsize=(8, 2.6))
ax.set_xlim(0, 12); ax.set_ylim(0, 3); ax.axis("off")
ax.text(1.6, 1.7, "H2N–CHR1–COOH", ha="center", fontsize=11, color=NAVY, fontweight="bold")
ax.text(1.6, 1.1, "amino acid 1", ha="center", fontsize=8.5, color=GRAY)
ax.text(3.5, 1.7, "+", fontsize=14, color=GRAY, ha="center")
ax.text(5.4, 1.7, "H2N–CHR2–COOH", ha="center", fontsize=11, color=NAVY, fontweight="bold")
ax.text(5.4, 1.1, "amino acid 2", ha="center", fontsize=8.5, color=GRAY)
ax.annotate("", xy=(9.7,1.7), xytext=(7.3,1.7), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.8))
ax.text(8.5, 2.05, "– H2O", ha="center", fontsize=8.5, color=CORAL)
ax.text(10.7, 1.9, "H2N–CHR1–CO–NH–CHR2–COOH", ha="center", fontsize=9.3, color=TEAL, fontweight="bold")
ax.text(10.7, 1.35, "liên kết peptide (–CO–NH–)", ha="center", fontsize=8.5, color=TEAL)
ax.text(6, 2.6, "Sự hình thành liên kết peptide giữa 2 amino acid", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
save(fig, "05_lienket_peptide")

# 6. Trung hop vs trung ngung
fig, axs = plt.subplots(1, 2, figsize=(9.5, 3.2))
ax = axs[0]; ax.set_xlim(0,10); ax.set_ylim(0,4); ax.axis("off")
ax.text(2, 3.2, "n  CH2=CH2", ha="center", fontsize=11, color=NAVY, fontweight="bold")
ax.annotate("", xy=(4.6,3.2), xytext=(3.2,3.2), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.8))
ax.text(3.9, 3.5, "t°, p, xt", ha="center", fontsize=8, color=CORAL)
ax.text(7, 3.2, "(–CH2–CH2–)n", ha="center", fontsize=11, color=TEAL, fontweight="bold")
ax.text(5, 2.4, "monomer có liên kết bội  →  polymer\n(không tạo sản phẩm phụ)", ha="center", fontsize=9, color=GRAY)
ax.text(5, 0.6, "Trùng hợp", ha="center", fontsize=11.5, color=NAVY, fontweight="bold")
ax = axs[1]; ax.set_xlim(0,10); ax.set_ylim(0,4); ax.axis("off")
ax.text(2.2, 3.2, "n H2N-R-COOH", ha="center", fontsize=10, color=NAVY, fontweight="bold")
ax.annotate("", xy=(5.4,3.2), xytext=(4.0,3.2), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.8))
ax.text(4.7, 3.5, "t°, xt", ha="center", fontsize=8, color=CORAL)
ax.text(7.6, 3.2, "(–HN–R–CO–)n", ha="center", fontsize=10, color=TEAL, fontweight="bold")
ax.text(5, 2.4, "monomer có ≥ 2 nhóm chức  →  polymer + n H2O\n(có tạo sản phẩm phụ)", ha="center", fontsize=9, color=GRAY)
ax.text(5, 0.6, "Trùng ngưng", ha="center", fontsize=11.5, color=NAVY, fontweight="bold")
save(fig, "06_trunghop_trungnguong")

# 7. Pin dien hoa Galvani Zn-Cu
fig, ax = plt.subplots(figsize=(8, 4))
ax.set_xlim(0, 12); ax.set_ylim(0, 6); ax.axis("off")
ax.add_patch(Rectangle((0.8, 0.6), 3.4, 3.2, fc=LIGHTBLUE, ec=NAVY, lw=1.3))
ax.add_patch(Rectangle((7.8, 0.6), 3.4, 3.2, fc=LIGHTGREEN, ec=TEAL, lw=1.3))
ax.add_patch(Rectangle((2.2, 1.0), 0.5, 3.6, fc=GRAY, ec=NAVY, lw=1.2))
ax.text(2.45, 4.85, "Zn", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
ax.add_patch(Rectangle((9.2, 1.0), 0.5, 3.6, fc="#C77B4A", ec=CORAL, lw=1.2))
ax.text(9.45, 4.85, "Cu", ha="center", fontsize=10.5, color=CORAL, fontweight="bold")
ax.text(2.5, 0.2, "dd ZnSO4", ha="center", fontsize=8.5, color=GRAY)
ax.text(9.5, 0.2, "dd CuSO4", ha="center", fontsize=8.5, color=GRAY)
ax.plot([2.45,2.45,9.45,9.45],[4.8,5.5,5.5,4.8], color=NAVY, lw=1.6)
ax.annotate("", xy=(7,5.5), xytext=(4.9,5.5), arrowprops=dict(arrowstyle="->", color=CORAL, lw=2))
ax.text(6, 5.75, "dòng electron", ha="center", fontsize=9, color=CORAL, fontweight="bold")
ax.plot([4.2,4.2],[2.2,2.2], color=NAVY)
ax.add_patch(Rectangle((3.9,1.9),2.4,0.6, fc="#E8E4D8", ec=GRAY, lw=1))
ax.text(5.1, 2.2, "cầu muối", ha="center", fontsize=8, color=GRAY)
ax.text(2.5, 5.9, "Cực âm (anode) – Zn: Zn → Zn²⁺ + 2e⁻ (oxi hoá)", ha="center", fontsize=8.3, color=NAVY)
ax.text(9.5, 5.9, "", ha="center")
ax.text(2.5, -0.35, "", ha="center")
ax.text(6, -0.3, "Cực dương (cathode) – Cu: Cu²⁺ + 2e⁻ → Cu (khử)", ha="center", fontsize=8.3, color=TEAL)
save(fig, "07_pin_galvani")

# 8. So do dien phan dung dich NaCl
fig, ax = plt.subplots(figsize=(8, 3.8))
ax.set_xlim(0, 12); ax.set_ylim(0, 5); ax.axis("off")
ax.add_patch(Rectangle((1, 0.6), 10, 3.2, fc="#EAF3EE", ec=NAVY, lw=1.3))
ax.text(6, 4.1, "dung dịch NaCl (có màng ngăn)", ha="center", fontsize=9, color=GRAY)
ax.add_patch(Rectangle((3, 1.0), 0.4, 2.6, fc=GRAY, ec=NAVY, lw=1.2))
ax.text(3.2, 3.85, "Cathode (–)", ha="center", fontsize=8.7, color=NAVY, fontweight="bold")
ax.add_patch(Rectangle((8.6, 1.0), 0.4, 2.6, fc=GRAY, ec=CORAL, lw=1.2))
ax.text(8.8, 3.85, "Anode (+)", ha="center", fontsize=8.7, color=CORAL, fontweight="bold")
ax.annotate("", xy=(6.6,4.5), xytext=(4.6,4.5), arrowprops=dict(arrowstyle="->", color=NAVY, lw=1.8))
ax.text(5.6, 4.7, "nguồn điện 1 chiều", ha="center", fontsize=8, color=NAVY)
ax.plot([3.2,3.2],[4.15,4.4], color=NAVY, lw=1.4)
ax.plot([8.8,8.8],[4.15,4.4], color=CORAL, lw=1.4)
ax.plot([4.6,3.2],[4.5,4.5],color=NAVY, lw=1.4)
ax.plot([6.6,8.8],[4.5,4.5],color=NAVY, lw=1.4)
ax.text(3.2, 0.75, "2H2O + 2e⁻ → H2↑ + 2OH⁻", ha="center", fontsize=7.6, color=NAVY)
ax.text(8.8, 0.75, "2Cl⁻ → Cl2↑ + 2e⁻", ha="center", fontsize=7.6, color=CORAL)
ax.text(6, -0.15, "Sơ đồ điện phân dung dịch NaCl có màng ngăn (điều chế NaOH, H2, Cl2)", ha="center", fontsize=9.5, color=NAVY, fontweight="bold")
save(fig, "08_dienphan_nacl")

print("done:", sorted(os.listdir("img")))
