function showMoreInfo(product) {
    const moreInfoId = product + '-more-info';
    const moreInfoElement = document.getElementById(moreInfoId);

    if (moreInfoElement.classList.contains('hidden')) {
        moreInfoElement.classList.remove('hidden');
    } else {
        moreInfoElement.classList.add('hidden');
    }
}

console.log("Organik Ürünler web sitesi yüklendi.");