import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, FancyBboxPatch
import numpy as np
import os

os.makedirs("img", exist_ok=True)
NAVY = "#1F3864"; TEAL = "#0F6E56"; CORAL = "#993C1D"; GRAY = "#5F5E5A"
LIGHTBLUE = "#DCE6F1"; LIGHTAMBER = "#FBECD3"; LIGHTGREEN = "#EAF3DE"
plt.rcParams["font.family"] = "DejaVu Sans"

def save(fig, name):
    fig.savefig(f"img/{name}.png", dpi=190, bbox_inches="tight", pad_inches=0.15, transparent=True)
    plt.close(fig)

# 13. Lien ket kim loai - tinh the kim loai
fig, ax = plt.subplots(figsize=(6.5, 4.4))
ax.set_xlim(0, 8); ax.set_ylim(0, 6); ax.axis("off")
for i in range(4):
    for j in range(3):
        x = 1.2 + i*1.9 + (0.9 if j % 2 else 0)
        y = 1 + j*2.0
        if x < 7.6:
            ax.add_patch(Circle((x, y), 0.55, fc=LIGHTAMBER, ec=CORAL, lw=1.6, zorder=3))
            ax.text(x, y, "M⁺", ha="center", va="center", fontsize=8.5, color=CORAL, fontweight="bold", zorder=4)
np.random.seed(3)
for _ in range(40):
    x, y = np.random.uniform(0.6,7.8), np.random.uniform(0.4,5.6)
    ax.add_patch(Circle((x,y), 0.06, fc=NAVY, ec="none", zorder=2, alpha=0.8))
ax.text(4, 5.7, "\"Biển\" electron tự do bao quanh các ion dương kim loại ở nút mạng", ha="center", fontsize=9.3, color=NAVY, fontweight="bold")
save(fig, "13_lienket_kimloai")

# 14. 3 phuong phap tach kim loai
fig, ax = plt.subplots(figsize=(8.5, 4.2))
ax.set_xlim(0, 12); ax.set_ylim(0, 6); ax.axis("off")
methods = [
    (2, "NHIỆT LUYỆN", "Khử oxide kim loại bằng\nchất khử (C, CO, H2, Al)\nở nhiệt độ cao", "Zn, Fe, Sn, Pb...", LIGHTBLUE, NAVY),
    (6, "THUỶ LUYỆN", "Hoà tan hợp chất kim loại,\nrồi dùng kim loại mạnh hơn\nkhử ion kim loại yếu hơn", "Cu, Ag, Au...", LIGHTGREEN, TEAL),
    (10, "ĐIỆN PHÂN", "Dùng dòng điện một chiều\nkhử ion kim loại\n(nóng chảy hoặc dung dịch)", "Na, K, Ca, Mg, Al...", LIGHTAMBER, CORAL),
]
for x, title, desc, ex, fc, ec in methods:
    ax.add_patch(FancyBboxPatch((x-1.7,2.4), 3.4, 2.6, boxstyle="round,pad=0.08", fc=fc, ec=ec, lw=1.6))
    ax.text(x, 4.6, title, ha="center", fontsize=10, color=ec, fontweight="bold")
    ax.text(x, 3.6, desc, ha="center", va="center", fontsize=8, color=NAVY)
    ax.text(x, 2.7, "VD: " + ex, ha="center", fontsize=7.8, color=GRAY, style="italic")
ax.text(6, 5.6, "Ba phương pháp tách kim loại (theo mức độ hoạt động hoá học)", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
ax.annotate("", xy=(10,1.6), xytext=(2,1.6), arrowprops=dict(arrowstyle="->", color=GRAY, lw=1.4))
ax.text(6, 1.15, "Tính khử của kim loại tăng dần →", ha="center", fontsize=8.3, color=GRAY, style="italic")
save(fig, "14_tachkimloai")

print("done:", sorted([f for f in os.listdir("img") if f.startswith(("13","14"))]))
