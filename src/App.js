import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Пуфик черный',
          img: 'pufik.png',
          desc: 'Стильный черный цвет позволяет гармонично вписаться в любой интерьер. Этот пуфик станет отличным дополнением к вашему домашнему пространству, обеспечивая уют и функциональность.',
          category: 'chairs',
          price: '69.35'
        },
        {
          id: 2,
          title: 'Стол трансформер',
          img: 'tabletransformer.png',
          desc: 'Наш трансформируемый стол - это функциональное и стильное решение для вашего пространства. Его уникальный дизайн позволяет легко изменять форму и размер в зависимости от ваших потребностей. Изготовлен из прочных и качественных материалов, он обеспечивает долгий срок службы.',
          category: 'tables',
          price: '99.89'
        },
        {
          id: 3,
          title: 'Диван бежевый',
          img: 'sofa.jpg',
          desc: 'Изготовлен из высококачественных материалов, он обеспечивает надежную поддержку и долгий срок службы. Его нейтральный бежевый оттенок добавит тепла и уюта в ваш дом.',
          category: 'sofa',
          price: '269.35'
        },
        {
          id: 4,
          title: 'Кресло коричневое',
          img: 'chair.png',
          desc: 'Наше коричневое кресло - это элегантное и удобное сиденье, которое прекрасно впишется в любой интерьер. Изготовлено из качественных материалов, оно обеспечивает надежную поддержку и долгий срок службы. Его тёмный коричневый оттенок придаст вашему пространству теплоту и стиль.',
          category: 'chairs',
          price: '109.15'
        },
        {
          id: 5,
          title: 'Вешалка',
          img: 'vesh.jpg',
          desc: 'Изготовлена из прочных материалов, она обеспечивает надежную поддержку для ваших вещей. Ее компактные размеры позволяют удобно разместить ее в любом помещении. Стильный дизайн и выбранный цвет подчеркнут эстетику вашего интерьера. ',
          category: 'veshalka',
          price: '19.00'
        },
        {
          id: 6,
          title: 'Золотая ванна',
          img: 'goldbath.jpg',
          desc: 'Наша золотая ванна - это абсолютное воплощение роскоши и утонченности. Изготовлена из чистого золота, она является великолепным произведением искусства. Её блестящая поверхность создает атмосферу роскошного уюта и комфорта в вашей ванной комнате. Эта ванна не только символ изысканности, но и практичное решение для вашего ухода за собой, обеспечивая неповторимый опыт ванной релаксации.',
          category: 'bath',
          price: '99969.15'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;
