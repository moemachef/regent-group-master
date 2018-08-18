      <img src='http://peacefultomorrows.org/wp-content/uploads/2016/06/two-doves.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='http://peacefultomorrows.org/wp-content/uploads/2016/06/two-doves.png' alt='Album two' data-action="http://passer.cc"/>
      <img src='http://peacefultomorrows.org/wp-content/uploads/2016/06/two-doves.png' alt='Album three' data-action="https://doce.cc/"/>
      <img src='http://peacefultomorrows.org/wp-content/uploads/2016/06/two-doves.png' alt='Album four' data-action="http://tw.yahoo.com"/>
  <StyleRoot>
    <Coverflow width="100%" height="700"
      displayQuantityOfSide={2}
      navigation={true}
      enableHeading={true}
      active={0} >

      {PRODUCTS.map((product)=>{
        return (
          <div className={product.id}>
          <img alt={'cayan-'+product.id} src={product.images} className={'cayan-'+product.id} />
          <div>

          </div>
          </div>
        )
      })}

    </Coverflow>
          </StyleRoot>
