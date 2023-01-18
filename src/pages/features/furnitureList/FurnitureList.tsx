import React, {FC, useEffect} from 'react';
import {SimpleFurniture} from "../../types/simpleFurniture";
import {getUser, listFurniture} from "./api";
import {Paper} from '@mantine/core';
import '../../Styles/FurnitureList.css';
import {Card, Image, Text, Badge, Button, Group} from '@mantine/core';
import basketLogo from '../../images/basket.png'
import {getUserId} from "../../../hooks/useIsLogged";
import {CreateUserDto} from "../../types/createUserDto";


export const FurnitureList: FC = () => {
    const [furnitures, setFurnitures] = React.useState<SimpleFurniture[]>([]);

    useEffect(() => {
        listFurniture().then((data) => setFurnitures(data))
    }, []);


    const addToBasket = (id: number) => {
        console.log(id);
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
                                src='basketLogo'
                                height={160}
                                alt="Furniture"
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