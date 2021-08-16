import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'

function Cards (props) {
    let href = `worker/${props.elem.id}`
    const location = useLocation().pathname
    // const img = "'" + props.elem.imagesrc + "'"
    console.log(props.elem);
    if (location !== `/${href}`) {
        return (
            <Card style={{ width: '18rem', display: 'inline-block', marginLeft: "2%"}}>
            <Card.Img variant="top" src={props.elem.imagesrc} alt='здась должна быть картинка'/>
            <Card.Body>
                <Card.Title>{props.elem.role}</Card.Title>
                <Card.Text>
                {props.elem.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Имя: {props.elem.firstname}</ListGroupItem>
                <ListGroupItem>Отчество: {props.elem.secondname}</ListGroupItem>
                <ListGroupItem>Фамилия: {props.elem.lastname}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={href} >Посмотреть подробнее</Card.Link>
                <Card.Text>
                Создатель карточки:{props.elem.creatorname}
                </Card.Text>
            </Card.Body>
        </Card>
        )
    } else {
    return (
        <Card style={{ width: '18rem', display: 'inline-block', marginLeft: "2%"}}>
            <Card.Img variant="top" src={props.elem.imagesrc} />
            <Card.Body>
                <Card.Title>{props.elem.role}</Card.Title>
                <Card.Text>
                {props.elem.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Имя: {props.elem.firstname}</ListGroupItem>
                <ListGroupItem>Отчество: {props.elem.secondname}</ListGroupItem>
                <ListGroupItem>Фамилия: {props.elem.lastname}</ListGroupItem>
                <ListGroupItem>Адрес: {props.elem.adres}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Text>
                Создатель карточки:{props.elem.creatorname}
                </Card.Text>
                <Card.Text>Начальник:{props.elem.employer}</Card.Text>
                <Card.Text>Организация:{props.elem.departmentname}</Card.Text>
                <Card.Text>Должность:{props.elem.positionname}</Card.Text>
                <Card.Link a><Link to='/'>Вернуться на главную</Link></Card.Link>
            </Card.Body>
        </Card>
    )}
}

export default Cards;
