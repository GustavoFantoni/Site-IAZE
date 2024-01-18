document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelector(".line-1");
    const lines2 = document.querySelector(".line-2");
    const lines3 = document.querySelector(".line-3");
    const images = ['Images/30000.webp', 'Images/30220.webp', 'Images/30211.webp', 'Images/30019.webp', 'Images/30255.webp', 'Images/30353.webp', 'Images/30309.webp', 'Images/30307.webp', 'Images/30354.webp' ];
    const images2 = ['Images/30332.webp', 'Images/30002.webp', 'Images/duo 105.webp', 'Images/30260.webp', 'Images/30124.webp', 'Images/30007.webp','Images/30134.webp', 'Images/30010.webp', 'Images/30360.webp', 'Images/30302.webp' ];
    const images3 = ['Images/30013.webp', 'Images/30344.webp', 'Images/30324.webp', 'Images/30259.webp', 'Images/30253.webp', 'Images/30300.webp', 'Images/30350.webp', 'Images/30324.webp', 'Images/30341.webp', 'Images/30015.webp']; 

    function appendImages(container, imageArray) {
        imageArray.forEach((url) => {
            const imageItem = document.createElement("div");
            imageItem.className = "image-item";
            const image = document.createElement("img");
            image.src = url;
            imageItem.appendChild(image);
            container.appendChild(imageItem);
        });
    }

    appendImages(lines, images);
    appendImages(lines2, images2);
    appendImages(lines3, images3);

    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
        const imageItems = document.querySelectorAll(".lines .image-item");

        imageItems.forEach((item) => {
            const dimensions = item.getBoundingClientRect();
            const isVisible = dimensions.top < window.innerHeight && dimensions.bottom >= 0;

            if (isVisible) {
                item.style.opacity = 1;
                item.style.transform = 'translate(0)';
            }
        });
    }
});
