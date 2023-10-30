import React, { useEffect, useState } from 'react'
import { View, StyleSheet, StatusBar, Text, FlatList, ActivityIndicator } from 'react-native'
import { PlansCard } from '../../components/payments/plansCard';
import serviceHelper from '../../helperFunction';
import { PaymentForm } from '../../components/payments/paymentForm';
import { StripeProvider } from '@stripe/stripe-react-native';


export const Payments = () => {
    const [subscriptionPlans, setSubscriptionPlans] = useState([])
    const [loader, setLoader] = useState(false)
    const [buttonLoader, setButtonLoader] = useState(false)
    const [priceId, setPriceId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        setLoader(true)
        serviceHelper('product', 'get').then((res) => {
            if (res.data) {
                setLoader(false)
                setSubscriptionPlans(res.data.productDetails)
            }
        })
    }, [])
    const handleCardClick = (priceid) => {
        // Creating subscription
        setButtonLoader(true)
        setPriceId(priceid)
        const payload = {
            customerId: "cus_OstV77JhWOCwGl",
            priceId: priceid
        }
        serviceHelper('subscription', 'post', payload).then((res) => {
            if (res.data) {
                setClientSecret(res.data.clientSecret)
                setButtonLoader(false)

            }
        }).catch((err) => {
            setButtonLoader(false)
            console.log('error', err)
        })

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Payments</Text>
            </View>

            {
                loader ? <ActivityIndicator style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 80
                }} />

                    :
                    <FlatList data={subscriptionPlans} renderItem={({ item }) =>
                        <View style={styles.cardsContainer} key={item.id}>
                            <PlansCard price={item.unit_amount} handleSubscription={() => handleCardClick(item.id)} buttonLoader={priceId == item.id && buttonLoader} />
                        </View>}
                        keyExtractor={item => item.id}
                    />
            }

            {
                clientSecret && (
                    <StripeProvider publishableKey={process.env.REACT_APP_STRIPE_PUBSLISHABLE_KEY} urlScheme='doneWithIt' merchantIdentifier="merchant.com.{{doneWithIt}}"  >
                        <PaymentForm
                            clientSecret={clientSecret}
                        />
                    </StripeProvider>
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,

    },
    header: {
        paddingTop: 5,
        marginLeft: 15
    },
    cardsContainer: {
        alignItems: 'center',
        marginTop: 15
    }
});