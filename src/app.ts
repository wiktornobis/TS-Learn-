const buttonElement = document.querySelector("button");

const calculatePrice = (orginalPrice: number, hasDiscount: boolean) => {
    return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
}
buttonElement.addEventListener("click", () => {
    const originalPrice: number = 50;
    const hasDiscount: boolean = new URLSearchParams(window.location.search).get("discount") === "true"
    console.log(calculatePrice(originalPrice, hasDiscount))
})