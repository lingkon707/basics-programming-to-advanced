function sectionAllot(per) {
    if (per >= 85) return "A";
    if (per >= 70) return "B";
    if (per >= 50) return "C";
    return "D";
}