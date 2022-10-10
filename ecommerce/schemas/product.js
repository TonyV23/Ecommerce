// schema for products
export default{
    name :'product',
    title : 'Product',
    type : 'document',
    fields : [
        {
            name : 'image',
            title : 'Image',
            type : 'array',
            of : [{ type : 'image'}],
            options : { 
                hotspot : true, // sanity docs (hotspot)
            }
        },
        {
            name : 'name',
            title : 'Name',
            type : 'string',
        },
        {
            // slug make dynamic page routing 
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options :{
                source : 'name',
                maxLength : 90,
            }
        },
        {
            name : 'price',
            title : 'Price',
            type : 'number'
        },
        {
            name : 'details',
            title : 'Details',
            type : 'string',
        }
    ]
}