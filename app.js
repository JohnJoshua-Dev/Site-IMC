
        new Vue({
            el: '#app',     
            template: `
            <div class="container">
            <div class="header">
</div>
<div class="esq"></div>

<div class="form-group">
<h1>Índice Massa Corporal</h1>
<p>Conheça o estado do teu corpo <br> <br>
</p>
<form >
    <label for="peso">Peso (Kg)</label><br>
    <input type="number" v-model="peso" name="peso"/>
    <br>
    <label for="altura">Altura (m)</label><br>
    <input type="number" v-model="altura" name="altura"/> <br>
    <button v-on:click.prevent="calcular" @click="qualEstado">Verificar</button><br>
    <hr> <br>
    
        <p class="resultado"> Resultado: <span>{{ resultado }}</span></p>
    
    <p>o teu estado é:<strong>{{ this.estado }}</strong></p>
    <br>
    <p> {{erroMessage }}</p>

</form>
</div>
<div class="dir"></div>
<footer>
    &CopyRight: josuerafaelsitoe@gmail.com
</footer>
</div>
           `, 
           data() {
            return {
                peso: '',
                altura: '' ,
                resultado: '',
                estado: '',
                erroMessage: '',
            }

           },
           methods: {

            calcular() {
                if( this.peso ==='' || this.altura==='' )
                {
                   this.erroMessage="Numeros Invalidos! os campos não devem estar vasios! use .(ponto) para casas decimais "
                   this.resultado = '',
               this.estado = ''
                   this.peso= '',
                   this.altura = ''
                } 
                this.erroMessage=''
                this.resultado=(this.peso/(this.altura*this.altura)).toFixed(1)  
            
            },
            qualEstado() {
                if( this.peso ==='' || this.altura==='' )
                {
                   this.erroMessage="Numeros Invalidos! os campos não devem estar vasios! use .(ponto) para casas decimais "
               this.resultado = '',
               this.estado = ''
               return ; }

               this.erroMessage=''

                if(this.resultado < 18.6){
                    this.estado= 'Abaixo do Peso'
                }
                else if(this.resultado<25){
                    this.estado= 'Peso Ideal'
                }
                else if(this.resultado <30){
                    this.estado= 'levemente Acima do Peso'
                }
                else if(this.resultado<35){
                    this.estado= 'Obesidade nivel I'
                }
                else if(this.resultado<40){
                    this.estado='Obesidade nivel II'
                }
                else{
                    this.estado='Obesidade nivel III'
                }

                this.peso= '',
                this.altura= ''
            },
                 
           }
        

        })
    