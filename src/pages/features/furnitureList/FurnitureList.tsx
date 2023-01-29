import React, {FC, useEffect} from 'react';
import {SimpleFurniture} from "../../types/simpleFurniture";
import {addFurnitureToUser, listFurniture} from "./api";
import {Paper} from '@mantine/core';
import '../../Styles/FurnitureList.css';
import {Card, Image, Text, Badge, Button, Group} from '@mantine/core';
import {getCookieName} from "../me/MeForm";
import {notificationAterAddFurnitureToUser} from "./notufication";


type FurnitureUser = {
    userId: number,
    furnituresId: number
}

export const FurnitureList: FC = () => {
    const [furnitures, setFurnitures] = React.useState<SimpleFurniture[]>([]);

    useEffect(() => {
        listFurniture().then((data) => setFurnitures(data))
    }, []);


    const addToBasket = async (furnituresId: number) => {
        const userId = getCookieName('user-id');
        try {
            const userFurniture: FurnitureUser = {
                userId: parseInt(userId),
                furnituresId: furnituresId,
            }
            await addFurnitureToUser(userFurniture);
            notificationAterAddFurnitureToUser();

        } catch (e) {
            throw new DOMException("Sth is wrong")
        }
    }


    return (
        <div className={'furniture-list-container'}>
            {furnitures.map((furniture) => (
                <Paper key={furniture.id} className={'furniture-list-children'} shadow="xl" radius="lg" p="lg"
                       withBorder
                       style={{marginTop: '5px'}}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                height={120}
                                // src={null}
                                alt="With default placeholder"
                                withPlaceholder
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>{furniture.type}</Text>

                            <Badge color="pink" variant="light">
                                {furniture.price}$
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                            {furniture.specific}
                        </Text>
                        <Button onClick={() => addToBasket(furniture.id)} variant="light"
                                style={{backgroundColor: '#F2A65A', color: 'black'}} fullWidth mt="md"
                                radius="md">
                            Add To Basket
                        </Button>
                    </Card>

                </Paper>
            ))
            }
        </div>
    );
};