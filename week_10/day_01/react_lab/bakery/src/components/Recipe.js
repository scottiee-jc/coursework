import React from "react";

const Recipe = () => {


    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        },
        {
            cakeName: "Medium Rare Chicken Tart",
            ingredients: ["medium rare chicken", "flour", "eggs", "sugar", "lemon zest"],
            rating: 1
        }
    ]

    const deserts = [...cakes];

    const [lemonDrizz, teaLoaf, ...remainingCakes] = cakes;

    return (
        <div className="recipeDesign">
        <h3 className="recipeText">Cake</h3>
        <p className="recipeText"></p>
        <p className="recipeText"></p>
        <p className="recipeText">Cuppa sugars</p>
        </div>
    )
}

export default Recipe;