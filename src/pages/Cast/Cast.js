import React, {Component} from 'react';
import './Cast.css'
import CastSub from './../../pagesSub/Cast/CastSub';
import SingleForm from './../../pagesSub/Cast/SingleForm'


// const products = [
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football", name_zh: "足球"},
//     {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball", name_zh: "棒球"},
//     {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball", name_zh: "篮球"},
//     {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch", name_zh: "平板电脑"},
//     {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5", name_zh: "苹果5"},
//     {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7", name_zh: "三星7"},
//     {category: "Sporting Goods", price: "$59.99", stocked: true, name: "Rugby", name_zh: "橄榄球"},
//     {category: "Sporting Goods", price: "$69.99", stocked: true, name: "Volleyball", name_zh: "排球"},
//     {category: "Sporting Goods", price: "$79.99", stocked: false, name: "Tennis", name_zh: "网球"},
//     {category: "Electronics", price: "$299.99", stocked: true, name: "XiaoMi2", name_zh: "小米2"},
//     {category: "Electronics", price: "$499.99", stocked: false, name: "iPhone 6", name_zh: "苹果6"},
//     {category: "Electronics", price: "$599.99", stocked: true, name: "HUAWEI", name_zh: "华为"},
//     {category: "Sporting Goods", price: "$89.99", stocked: true, name: "Handball", name_zh: "手球"},
//     {category: "Sporting Goods", price: "$99.99", stocked: true, name: "Hockey", name_zh: "曲棍球"},
//     {category: "Sporting Goods", price: "$39.99", stocked: false, name: "Golf", name_zh: "高尔夫球"},
//     {category: "Electronics", price: "$699.99", stocked: true, name: "Meizu", name_zh: "魅族"},
//     {category: "Electronics", price: "$799.99", stocked: false, name: "iPhone 7", name_zh: "苹果7"},
//     {category: "Electronics", price: "$899.99", stocked: true, name: "Rongyao", name_zh: "荣耀"},
//     {category: "Sporting Goods", price: "$19.99", stocked: true, name: "Cricket", name_zh: "板球"},
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Ice Hockey", name_zh: "冰球"},
//     {category: "Sporting Goods", price: "$36.99", stocked: false, name: "Softball", name_zh: "垒球"},
//     {category: "Sporting Goods", price: "$56.99", stocked: false, name: "Pingpang", name_zh: "乒乓球"}
// ];

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football", name_zh: "足球"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball", name_zh: "棒球"},
    {category: "Sporting Goods", price: "$59.99", stocked: true, name: "Rugby", name_zh: "橄榄球"},
    {category: "Sporting Goods", price: "$69.99", stocked: true, name: "Volleyball", name_zh: "排球"},
    {category: "Sporting Goods", price: "$79.99", stocked: true, name: "Tennis", name_zh: "网球"},
    {category: "Sporting Goods", price: "$89.99", stocked: true, name: "Handball", name_zh: "手球"},
    {category: "Sporting Goods", price: "$99.99", stocked: true, name: "Hockey", name_zh: "曲棍球"},
    {category: "Sporting Goods", price: "$19.99", stocked: true, name: "Cricket", name_zh: "板球"},
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Ice Hockey", name_zh: "冰球"},
    {category: "Sporting Goods", price: "$39.99", stocked: false, name: "Golf", name_zh: "高尔夫球"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball", name_zh: "篮球"},
    {category: "Sporting Goods", price: "$36.99", stocked: false, name: "Softball", name_zh: "垒球"},
    {category: "Sporting Goods", price: "$56.99", stocked: false, name: "Pingpang", name_zh: "乒乓球"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch", name_zh: "平板电脑"},
    {category: "Electronics", price: "$399.99", stocked: true, name: "iPhone 5", name_zh: "苹果5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7", name_zh: "三星7"},
    {category: "Electronics", price: "$299.99", stocked: true, name: "XiaoMi2", name_zh: "小米2"},
    {category: "Electronics", price: "$599.99", stocked: true, name: "HUAWEI", name_zh: "华为"},
    {category: "Electronics", price: "$899.99", stocked: true, name: "Rongyao", name_zh: "荣耀"},
    {category: "Electronics", price: "$699.99", stocked: true, name: "Meizu", name_zh: "魅族"},
    {category: "Electronics", price: "$799.99", stocked: false, name: "iPhone 7", name_zh: "苹果7"},
    {category: "Electronics", price: "$499.99", stocked: false, name: "iPhone 6", name_zh: "苹果6"}
];


class Cast extends Component {
    render() {
        return (
            <div className="cast">
                <CastSub/>
                <SingleForm products={products}/>
            </div>
        );
    }
}

export default Cast;
