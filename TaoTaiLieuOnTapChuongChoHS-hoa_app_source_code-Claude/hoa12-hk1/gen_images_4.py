import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Rectangle, FancyBboxPatch
import numpy as np
import os

NAVY = "#1F3864"; TEAL = "#0F6E56"; CORAL = "#993C1D"; GRAY = "#5F5E5A"
LIGHTBLUE = "#DCE6F1"; LIGHTAMBER = "#FBECD3"
plt.rcParams["font.family"] = "DejaVu Sans"

def save(fig, name):
    fig.savefig(f"img/{name}.png", dpi=190, bbox_inches="tight", pad_inches=0.15, transparent=True)
    plt.close(fig)

fig, axs = plt.subplots(1, 2, figsize=(9, 3.8))
ax = axs[0]; ax.set_xlim(0,10); ax.set_ylim(0,6); ax.axis("off")
ax.add_patch(Rectangle((1,1),8,2.2, fc="#C9C4B8", ec=GRAY, lw=1.3))
ax.text(5,2.1,"Fe – C (gang, thép)", ha="center", va="center", fontsize=9, color=NAVY, fontweight="bold")
ax.add_patch(Rectangle((0.6,3.2),8.8,0.9, fc=LIGHTBLUE, alpha=0.6, ec="none"))
ax.text(5,3.65,"lớp nước ẩm (có hoà tan O2, CO2)", ha="center", fontsize=7.6, color=NAVY)
for x in [2,3.5,5,6.5,8]:
    ax.add_patch(Circle((x,3.2), 0.13, fc=CORAL, ec="none"))
ax.annotate("", xy=(3.5,3.3), xytext=(2,3.3), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.2))
ax.text(5, 0.5, "Fe: cực âm (bị oxi hoá, gỉ) — C: cực dương", ha="center", fontsize=8, color=CORAL, fontweight="bold")
ax.text(5, 5.6, "Ăn mòn điện hoá (gỉ sắt trong không khí ẩm)", ha="center", fontsize=9.8, color=NAVY, fontweight="bold")
ax = axs[1]; ax.set_xlim(0,10); ax.set_ylim(0,6); ax.axis("off")
ax.add_patch(Rectangle((1,1),8,2.2, fc="#C9C4B8", ec=GRAY, lw=1.3))
ax.text(5,2.1,"Vỏ tàu thép (Fe)", ha="center", va="center", fontsize=9, color=NAVY, fontweight="bold")
ax.add_patch(Rectangle((0.6,3.2),8.8,0.9, fc=LIGHTBLUE, alpha=0.6, ec="none"))
ax.text(5,3.65,"nước biển", ha="center", fontsize=7.6, color=NAVY)
ax.add_patch(Rectangle((4.2,0.1),1.6,0.9, fc=LIGHTAMBER, ec=CORAL, lw=1.4))
ax.text(5,0.55,"Zn (anode hi sinh)", ha="center", va="center", fontsize=7.2, color=CORAL, fontweight="bold")
ax.annotate("", xy=(5,1.0), xytext=(5,1.0), arrowprops=dict(arrowstyle="-", color=GRAY))
ax.plot([5,5],[1.0,1.0], color=GRAY)
ax.text(5, 5.6, "Bảo vệ điện hoá bằng \"anode hi sinh\" (Zn)", ha="center", fontsize=9.8, color=NAVY, fontweight="bold")
save(fig, "15_anmon_baove")

print("done")
