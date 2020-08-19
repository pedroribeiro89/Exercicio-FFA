<template>
    <div>
        <ProductForm :submitedForm="addProduct"></ProductForm>
        <ProductsList></ProductsList>
    </div>
</template>

<script>
    import ProductForm from "./ProductForm";
    import ProductsList from "./ProductsList";
    import {ADD_PRODUCT_ACTION} from "../store/actions.types";

    export default {
        name: "Home",
        components: {
            ProductForm,
            ProductsList
        },
        methods: {
            addProduct(product) {
                // this.productList.push(product);
                this.$store.dispatch(ADD_PRODUCT_ACTION, product);
            }
        }
    }
</script>

<style scoped>

</style>
