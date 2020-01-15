import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { reqCategory } from '../../services';
import {
    Card,
    Icon,
    List
} from 'antd';
import memoryUtils from '../../utils/memoryUtils'
import './detail.less'

const Item = List.Item;

class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categoryName: '',
            product: memoryUtils.product || {}
        }
    }

    getCategory = async (categoryId) => {
        const result = await reqCategory(categoryId)
        if (result.code === 0) {
            const categoryName = result.data.name;
            this.setState({ categoryName })
        }
    }
    componentDidMount() {
        const product = memoryUtils.product;
        if (product._id) {
            this.getCategory(product.categoryId)
        }
        if (this.state.product._id) {
            const id = this.props.match.params.id
            console.log(id)
            const product = {
                "status": 1,
                "imgs": ["xxxx.jpg"],
                "_id": "5cdasdsa",
                "name": "dasdas" + id,
                "desc": "casdas",
                "price": 5132,
                "categoryId": 123213,
                "detail": "dasdasd"
            }
            this.setState({ product })
        }
    }

    render() {
        const { product } = this.state;
        // if (!product || !product._id) { return <Redirect to='/admin/products' /> }

        const title = (
            <span>
                <button
                    style={{ border: "none", background: "transparent", color: 'pink', cursor: 'pointer' }}
                    onClick={() => this.props.history.goBack()}
                >
                    <Icon type='arrow-left' />
                </button>
                <span>商品详情</span>
            </span>
        )

        const { categoryName } = this.state;

        return (
            <Card title={title} className="detail">
                <List>
                    <Item>
                        <span className='detail-left'>商品名称</span>
                        <span>{product.name}</span>
                    </Item>
                    <Item>
                        <span className='detail-left'>商品描述</span>
                        <span>{product.desc}</span>
                    </Item>
                    <Item>
                        <span className='detail-left'>商品价格</span>
                        <span>{product.price}</span>
                    </Item>
                    <Item>
                        <span className='detail-left'>所属分类</span>
                        <span>{categoryName}</span>
                    </Item>
                    <Item>
                        <span className='detail-left'>商品图片</span>
                        {
                            product.imgs && product.imgs.map((img, index) => {
                                return <img className="detail-img" src={img} alt="img" key={img + index} />
                            })
                        }
                    </Item>
                    <Item>
                        <span className='detail-left'>商品详情</span>
                        <span dangerouslySetInnerHTML={{ __html: product.detail }} />
                    </Item>
                </List>
            </Card>
        );
    }
}

export default ProductDetail;