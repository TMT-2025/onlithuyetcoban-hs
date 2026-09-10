import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Rectangle, FancyBboxPatch, Ellipse
import numpy as np
import os

os.makedirs("img", exist_ok=True)
NAVY = "#1F3864"; TEAL = "#0F6E56"; CORAL = "#993C1D"; GRAY = "#5F5E5A"
LIGHTBLUE = "#DCE6F1"; LIGHTGREEN = "#EAF3DE"; LIGHTAMBER = "#FBECD3"; LIGHTPINK="#F7E0E9"
plt.rcParams["font.family"] = "DejaVu Sans"

def save(fig, name):
    fig.savefig(f"img/{name}.png", dpi=190, bbox_inches="tight", pad_inches=0.15, transparent=True)
    plt.close(fig)

# 1. Do thi can bang hoa hoc: toc do thuan/nghich theo thoi gian
fig, ax = plt.subplots(figsize=(7, 3.6))
t = np.linspace(0, 10, 200)
v_thuan = 5*np.exp(-0.4*t) + 1.2
v_nghich = 1.2 + (5-1.2)*(1-np.exp(-0.4*t))
ax.plot(t, v_thuan, color=CORAL, lw=2, label="Tốc độ phản ứng thuận (v1)")
ax.plot(t, v_nghich, color=TEAL, lw=2, label="Tốc độ phản ứng nghịch (v2)")
ax.axvline(x=5.5, color=GRAY, linestyle="--", lw=1)
ax.axhline(y=1.2, color=GRAY, linestyle=":", lw=0.8)
ax.text(5.6, 4.5, "trạng thái\ncân bằng\n(v1 = v2)", fontsize=8.5, color=NAVY, fontweight="bold")
ax.set_xlabel("Thời gian (t)", fontsize=9, color=GRAY)
ax.set_ylabel("Tốc độ phản ứng", fontsize=9, color=GRAY)
ax.legend(fontsize=8.5, loc="upper right", frameon=False)
ax.spines["top"].set_visible(False); ax.spines["right"].set_visible(False)
ax.set_title("Sự thiết lập trạng thái cân bằng hoá học", fontsize=10.5, color=NAVY, fontweight="bold")
ax.set_xticks([]); ax.set_yticks([])
save(fig, "01_do_thi_can_bang")

# 2. Cau tao phan tu N2 va NH3
fig, axs = plt.subplots(1, 2, figsize=(8, 3.2))
ax = axs[0]; ax.set_xlim(-2,2); ax.set_ylim(-1.4,1.4); ax.set_aspect("equal"); ax.axis("off")
ax.add_patch(Circle((-0.6,0), 0.42, fc=LIGHTBLUE, ec=NAVY, lw=1.6))
ax.add_patch(Circle((0.6,0), 0.42, fc=LIGHTBLUE, ec=NAVY, lw=1.6))
ax.text(-0.6,0,"N", ha="center", va="center", fontsize=13, color=NAVY, fontweight="bold")
ax.text(0.6,0,"N", ha="center", va="center", fontsize=13, color=NAVY, fontweight="bold")
for dy in [-0.12, 0, 0.12]:
    ax.plot([-0.2,0.2],[dy,dy], color=CORAL, lw=1.8)
ax.set_title("N≡N (liên kết ba rất bền)", fontsize=10, color=NAVY)
ax = axs[1]; ax.set_xlim(-2,2); ax.set_ylim(-1.8,1.8); ax.set_aspect("equal"); ax.axis("off")
ax.add_patch(Circle((0,0.5), 0.4, fc=LIGHTGREEN, ec=TEAL, lw=1.6))
ax.text(0,0.5,"N", ha="center", va="center", fontsize=12, color=TEAL, fontweight="bold")
for ang in [230, 310, 90]:
    x,y = 0.9*np.cos(np.radians(ang)), 0.5+0.9*np.sin(np.radians(ang))
    ax.add_patch(Circle((x,y), 0.28, fc=LIGHTBLUE, ec=NAVY, lw=1.3))
    ax.text(x,y,"H", ha="center", va="center", fontsize=9.5, color=NAVY, fontweight="bold")
    ax.plot([0,x*0.75],[0.5,0.5+(y-0.5)*0.75], color=GRAY, lw=1.2, zorder=0)
ax.annotate("cặp electron\nchưa liên kết", xy=(0,1.2), xytext=(0.9,1.5), fontsize=7.5, color=CORAL,
            arrowprops=dict(arrowstyle="->", color=CORAL))
ax.set_title("NH3 (hình chóp tam giác)", fontsize=10, color=NAVY)
save(fig, "02_n2_nh3")

# 3. Chu trinh nitrogen trong tu nhien (don gian hoa)
fig, ax = plt.subplots(figsize=(8, 4.6))
ax.set_xlim(0, 12); ax.set_ylim(0, 8); ax.axis("off")
nodes = {
    "N2\n(khí quyển)": (2, 6.8),
    "NH3 / NH4+\n(cố định đạm)": (6, 6.8),
    "NO3⁻\n(nitrat hoá)": (10, 6.8),
    "Protein thực vật,\nđộng vật": (10, 3.5),
    "NH3 (phân huỷ)": (6, 1.2),
    "N2 (phản nitrat hoá)": (2, 3.5),
}
for label, (x,y) in nodes.items():
    ax.add_patch(FancyBboxPatch((x-1.3,y-0.55), 2.6, 1.1, boxstyle="round,pad=0.05", fc=LIGHTGREEN, ec=TEAL, lw=1.3))
    ax.text(x, y, label, ha="center", va="center", fontsize=8, color=NAVY, fontweight="bold")
arrows = [("N2\n(khí quyển)","NH3 / NH4+\n(cố định đạm)"),
          ("NH3 / NH4+\n(cố định đạm)","NO3⁻\n(nitrat hoá)"),
          ("NO3⁻\n(nitrat hoá)","Protein thực vật,\nđộng vật"),
          ("Protein thực vật,\nđộng vật","NH3 (phân huỷ)"),
          ("NH3 (phân huỷ)","N2 (phản nitrat hoá)"),
          ("N2 (phản nitrat hoá)","N2\n(khí quyển)")]
for a,b in arrows:
    x1,y1 = nodes[a]; x2,y2 = nodes[b]
    ax.annotate("", xy=(x2,y2), xytext=(x1,y1), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.4,
                connectionstyle="arc3,rad=0.15"))
ax.text(6, 7.7, "Vòng tuần hoàn nitrogen trong tự nhiên (đơn giản hoá)", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
save(fig, "03_chu_trinh_nitrogen")

# 4. San xuat H2SO4 - phuong phap tiep xuc
fig, ax = plt.subplots(figsize=(8.5, 2.8))
ax.set_xlim(0, 13); ax.set_ylim(0, 3); ax.axis("off")
steps = [
    (1.6, "S / FeS2", "đốt trong\nkhông khí"),
    (5.0, "SO2", "oxi hoá\n(V2O5, t°)"),
    (8.4, "SO3", "hấp thụ\nbằng H2SO4 đặc"),
    (11.6, "H2SO4"),
]
xs = [1.6, 5.0, 8.4, 11.6]
labels = ["S / FeS2", "SO2", "SO3", "H2SO4"]
conds = ["đốt, O2, t°", "V2O5, t°", "+ H2O"]
for x, lab in zip(xs, labels):
    ax.add_patch(FancyBboxPatch((x-0.9,1.0), 1.8, 1.0, boxstyle="round,pad=0.05", fc=LIGHTAMBER, ec=CORAL, lw=1.4))
    ax.text(x, 1.5, lab, ha="center", va="center", fontsize=10.5, color=NAVY, fontweight="bold")
for i in range(3):
    ax.annotate("", xy=(xs[i+1]-0.95, 1.5), xytext=(xs[i]+0.95, 1.5), arrowprops=dict(arrowstyle="->", color=TEAL, lw=1.8))
    ax.text((xs[i]+xs[i+1])/2, 2.15, conds[i], ha="center", fontsize=8, color=TEAL)
ax.text(6.5, 2.8, "Sản xuất sulfuric acid — phương pháp tiếp xúc", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
save(fig, "04_sanxuat_h2so4")

# 5. Dong dang va dong phan
fig, axs = plt.subplots(1, 2, figsize=(9, 3.2))
ax = axs[0]; ax.set_xlim(0,10); ax.set_ylim(0,4); ax.axis("off")
mols = ["CH4", "C2H6", "C3H8", "C4H10"]
for i, m in enumerate(mols):
    x = 1.2 + i*2.4
    ax.add_patch(FancyBboxPatch((x-0.9,1.5), 1.8, 1.0, boxstyle="round,pad=0.05", fc=LIGHTBLUE, ec=NAVY, lw=1.3))
    ax.text(x, 2.0, m, ha="center", va="center", fontsize=10.5, color=NAVY, fontweight="bold")
    if i < 3:
        ax.annotate("", xy=(x+1.5,2.0), xytext=(x+0.9,2.0), arrowprops=dict(arrowstyle="->", color=TEAL, lw=1.4))
        ax.text(x+1.2, 2.35, "+CH2", ha="center", fontsize=7.5, color=TEAL)
ax.text(5, 3.5, "Dãy đồng đẳng alkane\n(hơn kém nhau 1 hay nhiều nhóm CH2)", ha="center", fontsize=9.3, color=NAVY, fontweight="bold")
ax = axs[1]; ax.set_xlim(0,10); ax.set_ylim(0,4); ax.axis("off")
ax.add_patch(FancyBboxPatch((0.8,1.5), 3.4, 1.2, boxstyle="round,pad=0.05", fc=LIGHTGREEN, ec=TEAL, lw=1.3))
ax.text(2.5, 2.1, "CH3-CH2-CH2-CH3\n(butane, mạch thẳng)", ha="center", va="center", fontsize=8.7, color=NAVY, fontweight="bold")
ax.add_patch(FancyBboxPatch((5.8,1.5), 3.4, 1.2, boxstyle="round,pad=0.05", fc=LIGHTPINK, ec=CORAL, lw=1.3))
ax.text(7.5, 2.1, "CH3-CH(CH3)-CH3\n(isobutane, mạch nhánh)", ha="center", va="center", fontsize=8.5, color=NAVY, fontweight="bold")
ax.text(5, 3.5, "Đồng phân: cùng CTPT C4H10, khác cấu tạo", ha="center", fontsize=9.3, color=NAVY, fontweight="bold")
save(fig, "05_dongdang_dongphan")

# 6. Phuong phap tach chiet - chung cat
fig, axs = plt.subplots(1, 2, figsize=(8.5, 3.4))
ax = axs[0]; ax.set_xlim(0,10); ax.set_ylim(0,7); ax.axis("off")
ax.add_patch(Rectangle((1,0.5),3,2, fc=LIGHTAMBER, ec=CORAL, lw=1.4))
ax.text(2.5,1.5,"đun\nhỗn hợp", ha="center", va="center", fontsize=8.5, color=CORAL, fontweight="bold")
ax.plot([2.5,2.5,6],[2.5,4.5,4.5], color=GRAY, lw=1.6)
ax.plot([6,6],[4.5,2],color=GRAY, lw=1.6)
ax.add_patch(Rectangle((5,1.2),2,1, fc=LIGHTBLUE, ec=NAVY, lw=1.3))
ax.text(6,1.7,"chất lỏng\nngưng tụ", ha="center", va="center", fontsize=8, color=NAVY, fontweight="bold")
ax.text(4,6, "Chưng cất: tách theo\nnhiệt độ sôi khác nhau", ha="center", fontsize=9.3, color=NAVY, fontweight="bold")
ax = axs[1]; ax.set_xlim(0,10); ax.set_ylim(0,7); ax.axis("off")
ax.add_patch(Ellipse((5,3), 2.2, 3.6, fc="none", ec=NAVY, lw=1.6))
ax.plot([3,7],[3.3,3.3], color=TEAL, lw=1.3, linestyle="--")
ax.add_patch(Ellipse((5,4.4), 1.9, 1.3, fc=LIGHTBLUE, alpha=0.7, ec="none"))
ax.text(5,4.4,"lớp dung môi 1\n(chứa chất tan A)", ha="center", va="center", fontsize=7.3, color=NAVY, fontweight="bold")
ax.add_patch(Ellipse((5,1.9), 1.9, 1.3, fc=LIGHTGREEN, alpha=0.7, ec="none"))
ax.text(5,1.9,"lớp dung môi 2\n(chứa chất tan B)", ha="center", va="center", fontsize=7.3, color=NAVY, fontweight="bold")
ax.text(4,6.4, "Chiết: tách theo độ tan\nkhác nhau ở 2 dung môi", ha="center", fontsize=9.3, color=NAVY, fontweight="bold")
save(fig, "06_chungcat_chiet")

print("done:", sorted(os.listdir("img")))
