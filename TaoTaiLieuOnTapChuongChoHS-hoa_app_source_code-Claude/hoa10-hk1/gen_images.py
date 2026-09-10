import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyArrowPatch, Circle, Rectangle, FancyArrow, Wedge
import numpy as np
import os

os.makedirs("img", exist_ok=True)

NAVY = "#1F3864"
TEAL = "#0F6E56"
CORAL = "#993C1D"
GRAY = "#5F5E5A"
LIGHTBLUE = "#DCE6F1"
LIGHTGREEN = "#EAF3DE"
LIGHTRED = "#F7E3DC"
GOLD = "#C9962C"

plt.rcParams["font.family"] = "DejaVu Sans"
plt.rcParams["svg.fonttype"] = "none"

def save(fig, name, w=None):
    fig.savefig(f"img/{name}.png", dpi=200, bbox_inches="tight", pad_inches=0.15, transparent=True)
    plt.close(fig)

# ---------------------------------------------------------------
# 1. Mo hinh cau tao nguyen tu (Lithium: 3p 4n, 2 lop electron)
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(5.5, 5))
ax.set_xlim(-4, 4); ax.set_ylim(-4, 4); ax.set_aspect("equal"); ax.axis("off")

for r, col, lw in [(3.3, TEAL, 2), (1.9, "#7FB3A8", 2)]:
    ax.add_patch(Circle((0,0), r, fill=False, ec=col, lw=lw, ls=(0,(5,3))))

# nucleus
nucleus_particles = [(-0.18,0.12,"+"),(0.2,-0.05,"+"),(0.0,-0.22,"+"),
                      (0.25,0.2,"n"),(-0.28,-0.15,"n"),(0.05,0.28,"n"),(-0.05,-0.32,"n")]
for dx,dy,t in nucleus_particles:
    c = CORAL if t=="+" else GRAY
    ax.add_patch(Circle((dx,dy), 0.16, color=c, ec="white", lw=0.6, zorder=5))
ax.text(0, -1.15, "Hạt nhân\n(3p + 4n)", ha="center", fontsize=11, color=NAVY, fontweight="bold")

# electrons lop 1 (2e)
for ang in [60, 240]:
    x, y = 1.9*np.cos(np.radians(ang)), 1.9*np.sin(np.radians(ang))
    ax.add_patch(Circle((x,y), 0.16, color=NAVY, zorder=5))
# electrons lop 2 (1e)
ang = 100
x, y = 3.3*np.cos(np.radians(ang)), 3.3*np.sin(np.radians(ang))
ax.add_patch(Circle((x,y), 0.16, color=NAVY, zorder=5))

ax.annotate("Lớp electron\nthứ nhất (K) – 2e", xy=(1.9*np.cos(np.radians(60)), 1.9*np.sin(np.radians(60))),
            xytext=(-3.9,2.3), fontsize=9.5, color=TEAL, fontweight="bold",
            arrowprops=dict(arrowstyle="-", color=TEAL, lw=1))
ax.annotate("Lớp electron\nthứ hai (L) – 1e", xy=(x,y), xytext=(1.6,3.4), fontsize=9.5, color="#7FB3A8", fontweight="bold",
            arrowprops=dict(arrowstyle="-", color="#7FB3A8", lw=1))
ax.text(0,3.9,"Mô hình cấu tạo nguyên tử Lithium (Z = 3)", ha="center", fontsize=11.5, color=NAVY, fontweight="bold")
save(fig, "01_mohinh_nguyentu")

# ---------------------------------------------------------------
# 2. So sanh kich thuoc nguyen tu va hat nhan (ty le)
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(6,3.2))
ax.set_xlim(0,10); ax.set_ylim(0,4); ax.axis("off")
ax.add_patch(Circle((2.3,2), 1.9, fill=True, fc=LIGHTBLUE, ec=TEAL, lw=2))
ax.add_patch(Circle((2.3,2), 0.045, fill=True, fc=CORAL))
ax.text(2.3, 0.0, "Nguyên tử  (~10⁻¹⁰ m)", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
ax.annotate("Hạt nhân (~10⁻¹⁴–10⁻¹⁵ m)\nnhỏ hơn nguyên tử\nkhoảng 10 000 – 100 000 lần",
            xy=(2.35,2.0), xytext=(6.2,2.6), fontsize=9.5, color=CORAL,
            arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.3))
ax.text(2.3, 4.0, "Tỉ lệ kích thước nguyên tử – hạt nhân", ha="center", fontsize=11.5, color=NAVY, fontweight="bold")
save(fig, "02_tyle_kichthuoc")

# ---------------------------------------------------------------
# 3. Dong vi Hydrogen
# ---------------------------------------------------------------
fig, axs = plt.subplots(1, 3, figsize=(9, 3.4))
labels = [("Protium  ¹H", 1, 0), ("Deuterium  ²H", 1, 1), ("Tritium  ³H", 1, 2)]
for ax, (name, p, n) in zip(axs, labels):
    ax.set_xlim(-2,2); ax.set_ylim(-2.3,2); ax.set_aspect("equal"); ax.axis("off")
    ax.add_patch(Circle((0,0), 1.5, fill=False, ec=TEAL, lw=2, ls=(0,(5,3))))
    parts = []
    if p: parts.append((-0.13*n/2 if n else 0, 0.12, "+"))
    for i in range(n):
        parts.append((0.16*(i-(n-1)/2), -0.1, "n"))
    if n == 0:
        parts = [(0,0,"+")]
    for dx,dy,t in parts:
        c = CORAL if t=="+" else GRAY
        ax.add_patch(Circle((dx,dy), 0.17, color=c, ec="white", lw=0.6, zorder=5))
    ax.add_patch(Circle((0,1.5), 0.16, color=NAVY, zorder=5))
    ax.text(0, -2.05, name, ha="center", fontsize=11, color=NAVY, fontweight="bold")
fig.suptitle("Ba đồng vị bền của nguyên tố Hydrogen (cùng Z = 1, khác số neutron)", fontsize=11.5, color=NAVY, fontweight="bold", y=1.02)
save(fig, "03_dongvi_hydrogen")

# ---------------------------------------------------------------
# 4. Hinh dang orbital s va p
# ---------------------------------------------------------------
fig, axs = plt.subplots(1, 2, figsize=(8, 3.6))
ax = axs[0]; ax.set_xlim(-2,2); ax.set_ylim(-2,2); ax.set_aspect("equal"); ax.axis("off")
ax.add_patch(Circle((0,0), 1.4, fill=True, fc=LIGHTBLUE, ec=TEAL, lw=2))
ax.add_patch(Circle((0,0), 0.06, fc=CORAL))
ax.text(0,-1.8,"Orbital s (hình cầu)", ha="center", fontsize=11, color=NAVY, fontweight="bold")

ax = axs[1]; ax.set_xlim(-2.3,2.3); ax.set_ylim(-2,2); ax.set_aspect("equal"); ax.axis("off")
for cx in [-0.85, 0.85]:
    ax.add_patch(mpatches.Ellipse((cx,0), 1.7, 1.05, fc=LIGHTGREEN, ec=TEAL, lw=2))
ax.add_patch(Circle((0,0), 0.06, fc=CORAL, zorder=5))
ax.text(0,-1.8,"Orbital p (hình số 8 nổi)", ha="center", fontsize=11, color=NAVY, fontweight="bold")
save(fig, "04_orbital_s_p")

# ---------------------------------------------------------------
# 5. Muc nang luong AO - thu tu dien electron
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(7.2,3.4))
order = ["1s","2s","2p","3s","3p","4s","3d","4p","5s"]
xs = np.arange(len(order))
ys = [1,2,2.3,3,3.3,3.9,3.7,4.2,4.6]
ax.plot(xs, ys, color=NAVY, lw=1.4, zorder=1)
for x,y,lab in zip(xs, ys, order):
    ax.add_patch(Rectangle((x-0.28,y-0.16), 0.56, 0.32, fc=LIGHTBLUE, ec=TEAL, lw=1.5, zorder=2))
    ax.text(x, y, lab, ha="center", va="center", fontsize=10, color=NAVY, fontweight="bold", zorder=3)
ax.annotate("", xy=(xs[-1]+0.5, ys[-1]), xytext=(xs[0]-0.5, ys[0]-0.4),
            arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.6))
ax.text((xs[0]+xs[-1])/2, 0.35, "Chiều tăng dần mức năng lượng → thứ tự điền electron", ha="center", fontsize=10, color=CORAL, fontweight="bold")
ax.set_xlim(-1, len(order)); ax.set_ylim(0,5.2); ax.axis("off")
ax.set_title("Trật tự mức năng lượng orbital nguyên tử (nguyên lí vững bền)", fontsize=11.5, color=NAVY, fontweight="bold")
save(fig, "05_thutu_mucnangluong")

# ---------------------------------------------------------------
# 6. O luong tu vi du - Oxygen Z=8: 1s2 2s2 2p4
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(7.5,2.4))
ax.set_xlim(0,12); ax.set_ylim(0,2.6); ax.axis("off")

def orbital_box(x, y, spins, label):
    ax.add_patch(Rectangle((x,y), 0.9, 0.9, fill=False, ec=NAVY, lw=1.6))
    if spins >= 1:
        ax.annotate("", xy=(x+0.3,y+0.82), xytext=(x+0.3,y+0.08), arrowprops=dict(arrowstyle="->", color=CORAL, lw=1.6))
    if spins >= 2:
        ax.annotate("", xy=(x+0.6,y+0.08), xytext=(x+0.6,y+0.82), arrowprops=dict(arrowstyle="->", color=TEAL, lw=1.6))
    ax.text(x+0.45, y-0.35, label, ha="center", fontsize=9.5, color=NAVY)

orbital_box(0.5, 1.1, 2, "1s²")
orbital_box(1.8, 1.1, 2, "2s²")
orbital_box(3.4, 1.1, 2, "2pₓ²")
orbital_box(4.6, 1.1, 1, "2p_y¹")
orbital_box(5.8, 1.1, 1, "2p_z¹")
ax.text(6.0, 2.3, "Ô orbital của nguyên tử Oxygen (Z = 8): 1s² 2s² 2p⁴  —  2 electron độc thân (quy tắc Hund)",
        ha="center", fontsize=10.3, color=NAVY, fontweight="bold")
save(fig, "06_o_luongtu_oxygen")

# ---------------------------------------------------------------
# 7. Cau truc bang tuan hoan rut gon (khoi s,p,d,f)
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(7.5,4.2))
ax.set_xlim(0,18); ax.set_ylim(0,8); ax.axis("off")
blocks = [
    (0,6,2,2, LIGHTBLUE, "Khối s\n(IA, IIA)"),
    (2,0,10,2, LIGHTRED, "Khối d  (nhóm B – kim loại chuyển tiếp)"),
    (12,4,6,4, LIGHTGREEN, "Khối p\n(IIIA – VIIIA)"),
    (2,-2.4,10,2, "#F1E4C9", "Khối f  (lanthanide, actinide)"),
]
# redraw with correct non-overlapping layout instead
fig, ax = plt.subplots(figsize=(7.8,4.6))
ax.set_xlim(0,18); ax.set_ylim(-2.6,8); ax.axis("off")
ax.add_patch(Rectangle((0,6),2,2, fc=LIGHTBLUE, ec=NAVY, lw=1.4))
ax.text(1,7,"Khối s\n(IA, IIA)", ha="center", va="center", fontsize=9.5, color=NAVY, fontweight="bold")
ax.add_patch(Rectangle((12,4),6,4, fc=LIGHTGREEN, ec=NAVY, lw=1.4))
ax.text(15,6,"Khối p\n(IIIA – VIIIA)", ha="center", va="center", fontsize=9.5, color=NAVY, fontweight="bold")
ax.add_patch(Rectangle((2,3.5),10,2.5, fc=LIGHTRED, ec=NAVY, lw=1.4))
ax.text(7,4.75,"Khối d\n(nhóm B – kim loại chuyển tiếp)", ha="center", va="center", fontsize=9.5, color=NAVY, fontweight="bold")
ax.add_patch(Rectangle((2,0.8),10,1.7, fc="#F1E4C9", ec=NAVY, lw=1.4))
ax.text(7,1.65,"Khối f  (lanthanide, actinide)", ha="center", va="center", fontsize=9.5, color=NAVY, fontweight="bold")
ax.text(9, 7.7, "Sơ đồ các khối nguyên tố trong bảng tuần hoàn", ha="center", fontsize=11.5, color=NAVY, fontweight="bold")
save(fig, "07_khoi_nguyento")

# ---------------------------------------------------------------
# 8. Xu huong bien doi ban kinh, do am dien trong bang tuan hoan
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(6.5,5.2))
ax.set_xlim(0,6); ax.set_ylim(0,6); ax.axis("off")
ax.add_patch(Rectangle((0.6,0.6), 4.8, 4.8, fill=False, ec=GRAY, lw=1.3))
for i in range(1,4):
    ax.plot([0.6,5.4],[0.6+i*1.2,0.6+i*1.2], color="#D8D6CE", lw=0.8)
    ax.plot([0.6+i*1.2,0.6+i*1.2],[0.6,5.4], color="#D8D6CE", lw=0.8)
ax.annotate("", xy=(5.2,5.2), xytext=(0.8,5.2), arrowprops=dict(arrowstyle="->", color=CORAL, lw=2.2))
ax.text(3, 5.55, "Chu kì → Z tăng: bán kính GIẢM, độ âm điện TĂNG", ha="center", fontsize=9.6, color=CORAL, fontweight="bold")
ax.annotate("", xy=(0.8,0.8), xytext=(0.8,5.0), arrowprops=dict(arrowstyle="->", color=TEAL, lw=2.2))
ax.text(0.35, 3, "Nhóm A → Z tăng:\nbán kính TĂNG,\nđộ âm điện GIẢM", rotation=90, ha="center", va="center", fontsize=9.4, color=TEAL, fontweight="bold")
ax.text(3, -0.15, "Bảng tuần hoàn", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
ax.text(3, 6.35, "Xu hướng biến đổi bán kính nguyên tử và độ âm điện", ha="center", fontsize=11.5, color=NAVY, fontweight="bold")
save(fig, "08_xuhuong_bienoi")

# ---------------------------------------------------------------
# 9. Su hinh thanh lien ket ion NaCl
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(7.6,3.4))
ax.set_xlim(0,10); ax.set_ylim(0,4); ax.axis("off")
ax.add_patch(Circle((1.6,2), 0.75, fc=LIGHTBLUE, ec=NAVY, lw=2))
ax.text(1.6,2,"Na", ha="center", va="center", fontsize=13, color=NAVY, fontweight="bold")
ax.text(1.6,0.9,"1s²2s²2p⁶3s¹\n(1e lớp ngoài cùng)", ha="center", fontsize=8.5, color=GRAY)
ax.add_patch(Circle((5,2), 0.75, fc=LIGHTGREEN, ec=TEAL, lw=2))
ax.text(5,2,"Cl", ha="center", va="center", fontsize=13, color=TEAL, fontweight="bold")
ax.text(5,0.9,"1s²2s²2p⁶3s²3p⁵\n(7e lớp ngoài cùng)", ha="center", fontsize=8.5, color=GRAY)
ax.annotate("", xy=(4.15,2.15), xytext=(2.45,2.15), arrowprops=dict(arrowstyle="-|>", color=CORAL, lw=2))
ax.text(3.3,2.55,"nhường 1e", ha="center", fontsize=9, color=CORAL, fontweight="bold")

ax.text(6.7,2,"→", fontsize=20, ha="center", va="center", color=NAVY, fontweight="bold")

ax.add_patch(Circle((8.1,2.5), 0.55, fc=LIGHTBLUE, ec=NAVY, lw=2))
ax.text(8.1,2.5,"Na⁺", ha="center", va="center", fontsize=11, color=NAVY, fontweight="bold")
ax.add_patch(Circle((8.1,1.15), 0.65, fc=LIGHTGREEN, ec=TEAL, lw=2))
ax.text(8.1,1.15,"Cl⁻", ha="center", va="center", fontsize=11, color=TEAL, fontweight="bold")
ax.annotate("", xy=(8.1,1.85), xytext=(8.1,1.95), arrowprops=dict(arrowstyle="<->", color=CORAL, lw=1.6))
ax.text(9.3,1.85,"lực hút\ntĩnh điện", ha="center", fontsize=8, color=CORAL)

ax.text(5, 3.7, "Sự hình thành liên kết ion trong NaCl", ha="center", fontsize=11.5, color=NAVY, fontweight="bold")
save(fig, "09_lienket_ion")

# ---------------------------------------------------------------
# 10. Cong thuc Lewis mot so phan tu
# ---------------------------------------------------------------
fig, axs = plt.subplots(1,4, figsize=(10,2.6))
mols = [
    ("H₂", [("H","H","-")]),
    ("HCl", [("H","Cl","-")]),
    ("O₂", [("O","O","=")]),
    ("N₂", [("N","N","≡")]),
]
for ax,(name, bonds) in zip(axs, mols):
    ax.set_xlim(0,4); ax.set_ylim(0,3); ax.axis("off")
    a,b,bt = bonds[0]
    ax.text(1.1,1.5,a, ha="center", va="center", fontsize=16, color=NAVY, fontweight="bold")
    ax.text(2.9,1.5,b, ha="center", va="center", fontsize=16, color=TEAL, fontweight="bold")
    sym = {"-":"—","=":"══","≡":"≡≡≡"}[bt]
    ax.text(2.0,1.5, sym if bt!="-" else "—", ha="center", va="center", fontsize=15, color=CORAL, fontweight="bold")
    ax.text(2.0,0.35,name, ha="center", fontsize=11, color=NAVY, fontweight="bold")
fig.suptitle("Công thức Lewis một số phân tử đơn giản (gạch nối = cặp electron dùng chung)", fontsize=10.8, color=NAVY, fontweight="bold", y=1.05)
save(fig, "10_lewis_phanttu")

# ---------------------------------------------------------------
# 11. Xen phu sigma va pi
# ---------------------------------------------------------------
fig, axs = plt.subplots(1,2, figsize=(8,3))
ax = axs[0]; ax.set_xlim(-2.6,2.6); ax.set_ylim(-1.4,1.4); ax.set_aspect("equal"); ax.axis("off")
for cx in [-1.1,1.1]:
    ax.add_patch(mpatches.Ellipse((cx,0), 1.9, 1.0, fc=LIGHTBLUE, ec=NAVY, lw=1.6, alpha=0.85))
ax.text(0,-1.25,"Liên kết σ: xen phủ trục (trực diện)", ha="center", fontsize=9.7, color=NAVY, fontweight="bold")

ax = axs[1]; ax.set_xlim(-2.6,2.6); ax.set_ylim(-1.6,1.6); ax.set_aspect("equal"); ax.axis("off")
for cy in [0.55,-0.55]:
    for cx in [-1.0,1.0]:
        ax.add_patch(mpatches.Ellipse((cx,cy), 1.7, 0.75, fc=LIGHTGREEN, ec=TEAL, lw=1.6, alpha=0.85))
ax.text(0,-1.5,"Liên kết π: xen phủ bên (song song)", ha="center", fontsize=9.7, color=NAVY, fontweight="bold")
save(fig, "11_sigma_pi")

# ---------------------------------------------------------------
# 12. Lien ket hydrogen giua cac phan tu nuoc
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(7,3.6))
ax.set_xlim(0,10); ax.set_ylim(0,5); ax.axis("off")
centers = [(1.6,3.4),(4.2,3.6),(6.8,3.2),(3.0,1.2),(6.0,1.0),(8.4,3.6)]
for (cx,cy) in centers:
    ax.add_patch(Circle((cx,cy),0.32, fc="#F2B6A0", ec=CORAL, lw=1.3))
    ax.text(cx,cy,"O", ha="center", va="center", fontsize=9.5, color=CORAL, fontweight="bold")
    for ang in [35,145]:
        hx, hy = cx+0.5*np.cos(np.radians(ang)), cy+0.5*np.sin(np.radians(ang))
        ax.add_patch(Circle((hx,hy),0.16, fc=LIGHTBLUE, ec=NAVY, lw=1))
        ax.text(hx,hy,"H", ha="center", va="center", fontsize=7.5, color=NAVY, fontweight="bold")

# hydrogen bonds (dashed) between nearby O...H
pairs = [((1.6,3.4),(4.2,3.6)), ((4.2,3.6),(6.8,3.2)), ((3.0,1.2),(1.6,3.4)),
         ((3.0,1.2),(6.0,1.0)), ((6.0,1.0),(6.8,3.2)), ((6.8,3.2),(8.4,3.6))]
for (x1,y1),(x2,y2) in pairs:
    ax.plot([x1,x2],[y1,y2], ls=(0,(4,3)), color=TEAL, lw=1.4, zorder=0)
ax.text(5, 4.6, "Liên kết hydrogen (nét đứt) giữa các phân tử nước", ha="center", fontsize=11.3, color=NAVY, fontweight="bold")
save(fig, "12_lienket_hydrogen")

# ---------------------------------------------------------------
# 13. So do nhuong nhan electron - phan ung oxi hoa khu (Zn + Cu2+)
# ---------------------------------------------------------------
fig, ax = plt.subplots(figsize=(7.6,3.2))
ax.set_xlim(0,10); ax.set_ylim(0,4); ax.axis("off")
ax.add_patch(Circle((1.8,2.3), 0.8, fc=LIGHTBLUE, ec=NAVY, lw=2))
ax.text(1.8,2.3,"Zn⁰", ha="center", va="center", fontsize=13, color=NAVY, fontweight="bold")
ax.add_patch(Circle((5,2.3), 0.75, fc=LIGHTGREEN, ec=TEAL, lw=2))
ax.text(5,2.3,"Cu²⁺", ha="center", va="center", fontsize=12.5, color=TEAL, fontweight="bold")
ax.annotate("", xy=(4.25,2.3), xytext=(2.6,2.3), arrowprops=dict(arrowstyle="-|>", color=CORAL, lw=2.2))
ax.text(3.4,2.75,"nhường 2e", ha="center", fontsize=9.5, color=CORAL, fontweight="bold")
ax.text(3.4,0.9,"Zn (chất khử): số oxi hoá 0 → +2 (bị oxi hoá)\nCu²⁺ (chất oxi hoá): số oxi hoá +2 → 0 (bị khử)",
        ha="center", fontsize=9, color=GRAY)
ax.text(7.8,2.3,"→", fontsize=20, ha="center", va="center", color=NAVY, fontweight="bold")
ax.add_patch(Circle((9.0,2.3),0.0001))
ax.text(5,3.7,"Sơ đồ nhường – nhận electron: Zn + Cu²⁺ → Zn²⁺ + Cu", ha="center", fontsize=11, color=NAVY, fontweight="bold")
save(fig, "13_oxihoa_khu")

print("done, files:", sorted(os.listdir("img")))
