import {Injectable} from "@nestjs/common";
import {from, Observable, of} from "rxjs";
import {ProductEntity} from "../models/Product.Entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateProductDto} from "../dto/CreateProductDto";
import {ProductDto} from "../dto/ProductDto";
import {EditProductDto} from "../dto/EditProductDto";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>) {
    }

    public findAll(): Observable<ProductEntity[]> {
        return from(this.productRepository.find());
    }

    public create(createProductDto: CreateProductDto): Promise<ProductDto>{
        return this.productRepository.save(createProductDto);
    }

    public edit(editProductDto: EditProductDto): Promise<ProductDto>{
        return this.productRepository.save(editProductDto);
    }

    public delete(productId: number): void{
        this.productRepository.delete(productId);
    }
}