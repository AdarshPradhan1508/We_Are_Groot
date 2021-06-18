[Detailed Description](https://docs.google.com/document/d/1g4VVMD2sqNoE4CflfS0tisqyRmqDXlYnJLarOc82f8M/edit) \
[Solution Roadmap](https://docs.google.com/presentation/d/1AlJi7E0Avzf80oA66lBgZswI5f86FO6M/edit#slide=id.p2) \
[3 minute Demo Video](https://www.youtube.com/watch?v=Kb-kdF8Rhs4)
# Green with Groot
[Click here](https://eu-gb.appid.cloud.ibm.com/oauth/v4/b612fdd7-c174-4bdc-8da8-8f2c42124ab5/authorization?client_id=08ea0c2d-2ca3-48a4-96b6-93b19d01ffbb&response_type=code&redirect_uri=http://localhost:3000/ibm/cloud/appid/callback&scope=appid_default&language=en-GB&state=t4QMqQccwAc01yztW8aPZ22A5S8=&language=en-GB&language=en-GB,en-GB&language=en-GB,en-GB,en-GB,en-GB&language=en-GB,en-GB,en-GB,en-GB,en-GB,en-GB,en-GB,en-GB) to visit the website. 

A web application which facilitates selling of recyclable products and buying of environment friendly ones. It also enables its users to keep a tab on their monthly Carbon footprint using their electricity, LPG, and fossil fuel usage data.

## Sign in and Authentication
**App ID** by **IBM cloud** has been used to authenticate a user. Once the authentication is succesful, the user lands on the homepage of our website.

## Get rid of your waste!
If a user wants to sell recyclable waste, he/she can raise a pick-up request through this feature. 

## Buy Eco-friendly products

A shopping catalog for users to buy green products with discount coupons avaiblable at the expense of coins earned by the user through our carbon footprint-based monthly reward system.

## Calculate carbon footprint:
To avail this feature, user has to link his/her electricity, LPG, Petrol/Diesel accounts with the website. Upon successful linkage, Carbon footprint will be calculated based on the following formula.

  4 factors have been taken into account:
  - Units of electricity (in KWh)- `elec_units`
  - LPG consumed (in Kg)- `LPG`
  - Petrol consumed (in L)- `petrol`
  - Diesel consumed (in L)- `diesel`

Emmision factors for the above factors are extracted from trusted recources of - \
[Central Electricity Authority](http://www.cea.nic.in/reports/planning/cdm_co2/cdm_co2.htm ) \
[Green House Gas Protocol](http://www.ghgprotocol.org/calculation-tools/alltools)


    Emission_Factor_Electricity = 0.8 Kg/KWh;
    Emission_Factor_Petrol = 2.296 Kg/L;
    Emission_Factor_Deisel = 2.653 Kg/L;
    Emission_Factor_LPG = 2.983 Kg/Kg;

Net Kg of CO2 can be calculated as the sum due to individual sources `elec_cf + petrol_cf + diesel_cf + LPG_cf`
which when divided by 1000 will give the Tonnes of CO2.

## Calculation of Coins:
 We are following the policy which ensures that the more regularly a user reduces carbon footprint, the more rewards a he/she would receive.
 To maintain, a non overflowing, readable value of Total coins- the following factor has been used- `0.5 * streak * 100` 
 
 This is multiplied to the difference of current and previous month's carbon footprint, and rounded of to the nearest integer-
 
 > add_to_balance = Math.round((past_cf - cf_basic) * scaling_factor);
 

