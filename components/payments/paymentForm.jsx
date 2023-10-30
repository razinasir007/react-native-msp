import React from 'react'
import { View, StyleSheet,Button,Alert } from 'react-native'
import { CardField, useStripe, useConfirmPayment, initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';

export const PaymentForm = (props) => {
    const {confirmPayment, loading} = useConfirmPayment();
    const handlePayPress = async () => {
        // Gather the customer's billing information (for example, email)
        // const billingDetails = {
        //   email: 'jenny.rosen@example.com',
        // };
    
        // // Fetch the intent client secret from the backend
      
    
        // // Confirm the payment with the card details
        // const {paymentIntent, error} = await confirmPayment(props.clientSecret, {
        //   type: 'Card',
        //   billingDetails,
        // });
    
        // if (error) {
        //   console.log('Payment confirmation error', error);
        // } else if (paymentIntent) {
        //   console.log('Success from promise', paymentIntent);
        // }
        try {
            const initSheet = await initPaymentSheet({
                paymentIntentClientSecret: props.clientSecret,
                // googlePay: true,
                merchantDisplayName: 'doneWithIt',
              })
              if (initSheet.error) {
                console.error(initSheet.error);
                return Alert.alert(initSheet.error.message);
              }
              const presentSheet = await presentPaymentSheet({
                clientSecret: props.clientSecret,
              });
              if (presentSheet.error) {
                console.error(presentSheet.error);
                return Alert.alert(presentSheet.error.message);
              }
              Alert.alert("Donated successfully! Thank you for the donation.");
        } catch (error) {
            console.error(error);
            Alert.alert("Payment failed!");
        }
      
      };
    
    // const handleSubmit = async (event) => {
    //     // We don't want to let default form submission happen here,
    //     // which would refresh the page.
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         // Stripe.js hasn't yet loaded.
    //         // Make sure to disable form submission until Stripe.js has loaded.
    //         return;
    //     }

    //     const result = await stripe.confirmPayment({
    //         //`Elements` instance that was used to create the Payment Element
    //         elements,
    //         redirect: "if_required",
    //     });

    //     if (result.error) {
    //         // Show error to your customer (for example, payment details incomplete)
    //         console.log(result.error.message);
    //     } else {
    //         alert("payment succeeded")

    //         // Your customer will be redirected to your `return_url`. For some payment
    //         // methods like iDEAL, your customer will be redirected to an intermediate
    //         // site first to authorize the payment, then redirected to the `return_url`.
    //     }
    // };
    return (
        <View style={styles.container} >
            <CardField
                onCardChange={(cardDetails) => console.log('cardDetails', cardDetails)}
            />
            <Button onPress={handlePayPress} title="Pay" disabled={loading} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});