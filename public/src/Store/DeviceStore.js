import { makeAutoObservable } from "mobx"

export default class DeviceStore {
   constructor() {
      this._brands = [
         // {id:1, name: 'Samsung'},
         // {id:2, name:'Apple'},
         // {id:3, name:'Asus'},
         // {id:4, name:'Acer'}
      ]
      this._types = [
         // {id:1, name: 'Холодильники'},
         // {id:2, name:'Смартфоны'},
         // {id:3, name:'Телевизоры'},
         // {id:4, name:'Ноутбуки'},
         // {id:5, name:'Мебель'},
      ]
      this._devices = [
         // {id:1, name:'Iphone 12 PRO',price:10000, rating:5,img: 'https://placehold.co/400x300'},
         // {id:2, name:'Iphone 12 PRO',price:10000, rating:5,img: 'https://placehold.co/400x300'},
         // {id:3, name:'Iphone 12 PRO',price:10000, rating:5,img: 'https://placehold.co/400x300'},
         // {id:3, name:'Iphone 12 PRO',price:10000, rating:5,img: 'https://placehold.co/400x300'},
         // {id:3, name:'Iphone 12 PRO',price:10000, rating:5,img: 'https://placehold.co/400x300'},
         // {id:3, name:'Iphone 12 PRO',price:10000, rating:5,img: 'https://placehold.co/400x300'},
      ]
      this._selectedType = {}
      this._selectedBrand = {}
      this._page = 1
      this._totalCount = 0
      this._limit = 3
      makeAutoObservable(this)
   }

   setBrands(brands) {
      this._brands = brands
   }
   setTypes(types) {
      this._types = types
   }
   setDevices(devices) {
      this._devices = devices
   }
   setSelectedType(type) {
      this.setPage(1)
      this._selectedType = type
   }
   setSelectedBrand(brand) {
      this.setPage(1)
      this._selectedBrand = brand
   }

   setPage(page) {
      this._page = page
   }
   setTotalCount(count) {
      this._totalCount = count
   }
   setLimit(limit) {
      this._limit = limit
   }
   get brands() {
      return this._brands
   }
   get types() {
      return this._types
   }
   get devices() {
      return this._devices
   }
   get selectedType() {
      return this._selectedType
   }
   get selectedBrand() {
      return this._selectedBrand
   }
   get page() {
      return this._page
   }
   get totalCount() {
      return this._totalCount
   }
   get limit() {
      return this._limit
   }
}
