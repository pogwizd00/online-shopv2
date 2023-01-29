import {showNotification} from "@mantine/notifications";


export const notificationAterAddFurnitureToUser = () => {
    showNotification({
        color: 'yellow',
        title: 'Successful',
        message: 'Product has been added to the basket',
    })
}

export const notificationRemoveFurnitureFromBasket = () => {
    showNotification({
        color: 'yellow',
        title: 'Successful',
        message: 'Product has been removed from the basket'
    })
}