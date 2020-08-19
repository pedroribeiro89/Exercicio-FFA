<template>
    <form @submit.prevent="onFormSubmit">
        <p> <label>Next Id:</label> {{nextId}}</p>
        <p>
            <label>Name:</label>
            <input type="text" v-model="name">
            {{nameError}}
        </p>
        <p>
            <label>Price:</label>
            <input type="text" v-model="price">
            {{priceError}}
        </p>
        <button type="submit">Add Product</button>
    </form>
</template>

<script>
    export default {
        name: "ProductForm",
        props: {
            submitedForm: Function
        },
        data() {
            return {
                name: '',
                price: '',
                nameError: '',
                priceError: ''
            };
        },
        computed: {
            nextId() { return this.$store.state.id + 1; },
        },
        watch: {
            name() {
                if (this.name.length < 5 || this.name.length > 15) {
                    this.nameError = 'name deve ter no minimo 5 caracteres e no maximo 15';
                } else {
                    this.nameError = '';
                }
            },
            price() {
                if (this.price.length < 3) {
                    this.priceError = 'price deve ter no minimo 3 caracteres';
                } else {
                    this.priceError = '';
                }
            }
        },
        methods: {
            validateForm() {
                return this.priceError.length === 0 &&
                       this.nameError.length === 0 &&
                       this.name.length > 0 &&
                       this.price.length > 0;
            },

            onFormSubmit() {
                if (this.validateForm() ) {
                    this.submitedForm({name: this.name, price: this.price});
                    this.name = '';
                    this.price = '';
                }
            }
        }
    }
</script>

<style scoped>

</style>
