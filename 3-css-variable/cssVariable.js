const inputAll = document.querySelectorAll('input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
};

inputAll.forEach(input => input.addEventListener('mousemove', handleUpdate));
inputAll.forEach(input => input.addEventListener('change', handleUpdate));