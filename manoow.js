dispatch(remove({ id: subscription.id }))
   .then(response => {
    if (response.data.errors && response.data.errors.length > 0) {
     dispatch(messageShow(response.data.errors[0].message))

     this.loading(false)
    } else {
     dispatch(messageShow('Unsubscribed successfully.'))

     onSuccessUnsubscribe()
    }
   })
   .catch(() => {
    dispatch(messageShow('There was some error unsubscribing. Please try again.'))

    this.loading(false)
   })
   .then(() => {
    setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)
   })