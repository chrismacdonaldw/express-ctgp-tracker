module.exports.swapURIFileType = (uri, filetype, replaced) => {
    return `${uri.substring(0, uri.lastIndexOf(replaced))}${filetype}`;
}