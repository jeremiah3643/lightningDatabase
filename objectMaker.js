const snackMaker = (title, description, filling, ingredient, topping) => {
    let newSnack = {
        title: title,
        description: description,
        filling: filling,
        ingredient: ingredient,
        topping: topping
    }
    return newSnack
}