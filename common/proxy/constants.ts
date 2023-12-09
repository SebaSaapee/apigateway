export enum RabbitMQ{
    UserQueue = 'users',
    OrderQueue = 'orders',
    ProductsQueue = 'products'
}

export enum UserMSG{
    CREATE = 'CREATE_USER',
    FIND_ALL =  'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER= 'VALID_USER',
}

export enum OrderMSG{
    CREATE = 'CREATE_CARRITO',
    FIND_ALL =  'FIND_CARRITOS',
    FIND_ONE = 'FIND_CARRITO',
    UPDATE = 'UPDATE_CARRITO',
    DELETE = 'DELETE_CARRITO',
    ADD_Product = 'ADD_PRODUCTO'
    
}
export enum    ProductosMSG{
    CREATE = 'CREATE_PRODUCT',
    FIND_ALL =  'FIND_PRODUCTS',
    FIND_ONE = 'FIND_PRODUCT',
    UPDATE = 'UPDATE_PRODUCT',
    DELETE = 'DELETE_PRODUCT',
    
}



