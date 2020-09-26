import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Observable} from "rxjs";
import {ProductService} from "./services/ProductService";
import {ProductEntity} from "./models/Product.Entity";
import {CreateProductDto} from "./dto/CreateProductDto";
import {ProductDto} from "./dto/ProductDto";
import {EditProductDto} from "./dto/EditProductDto";

@Controller('products')
export class ProductController{

    constructor(private productService: ProductService) {
    }

    @Get()
    findAll(): Observable<ProductEntity[]>{
        return this.productService.findAll();
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<ProductDto>{
        return this.productService.create(createProductDto);
    }

    @Put()
    edit(@Body() editProductDto: EditProductDto): Promise<ProductDto>{
        return this.productService.edit(editProductDto);
    }

    @Delete(':id')
    delete(@Param() postId:number) {
        this.productService.delete(postId);
    }
}