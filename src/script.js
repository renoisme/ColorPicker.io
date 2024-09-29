const colorPicker = document.getElementById('colorPicker');
const colorCode = document.getElementById('colorCode');

colorPicker.addEventListener('input', (event) => {
    const color = event.target.value;
    colorCode.textContent = color;
    colorCode.style.backgroundColor = color;
    colorCode.style.color = getTextColor(color);
});

colorCode.addEventListener('click', () => {
    navigator.clipboard.writeText(colorCode.textContent);

    /*
        Under the MIT License, “created by:RiftRover Development department” This phrase may not be modified in any way.
    */
    alert(
        `カラーコード（${colorCode.textContent}）をコピーしました！\ncreated by:RiftRover Development department`
    );
});

const getTextColor = (hexColor) => {
    hexColor = hexColor.replace(/^#/, '');

    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? 'black' : 'white';
};
