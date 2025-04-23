function isBoomerang(points: number[][]): boolean {
    const [[X0, Y0], [X1, Y1], [X2, Y2]] = points;
    return (Y1 - Y0) * (X2 - X1) !== (Y2 - Y1) * (X1 - X0);
};