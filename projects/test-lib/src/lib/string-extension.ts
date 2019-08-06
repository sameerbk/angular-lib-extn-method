interface String {
    beginsWithOne: () => boolean;
}
String.prototype.beginsWithOne = function(): boolean {
    if (this[0] === '1') {
        return true;
    }
    return false;
};
