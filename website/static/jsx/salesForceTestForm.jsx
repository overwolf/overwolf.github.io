
class SalesForceTestForm extends React.Component {
    constructor(props) {
      super(props); 
    }
  
    
    render() {
      return (
        <main>
          <div>

          <form action = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method = "POST" >
            
            <input type = "hidden" name = "oid" type = "text"  value = "00D5e000001Oxvi"/>  < br />
            <input type = "hidden" name = "retURL" type = "text"  value = "https://overwolf.github.io/docs/support/saleforce-test"/>  < br />

            <label for  = "first_name" > First Name </label>  
            <input id = "first_name" maxlength = "40" name = "first_name" size = "20" type = "text" />  < br />
            <label for  = "last_name"> Last Name </ label>
            <input id = "last_name" maxlength = "80" name = "last_name" size = "20" type = "text" />  < br />
            <label for  = "email" > Email </ label>
            <input id = "email" maxlength = "80" name = "email" size = "20" type = "text" />  < br />
            <label for  = "company" > Company </label>  
            <input id = "company" maxlength = "40" name = "company" size = "20" type = "text" />  < br />
            <label for  = "url" > Website </label>  
            <input id = "url" maxlength = "80" name = "url" size = "20" type = "text" />  < br />
            <label for  = "country" > Country </ label >
            < input id = "country" maxlength = "40" name = "country" size = "20" type = "text" />  < br />
                                    App Idea:  < textarea id = "00N5e00000Yv0u4" name = "00N5e00000Yv0u4" rows = "3" type = "text" wrap = "soft" >  </ textarea >  < br />
                                    Games:  <select id = "00N5e00000YsxRf" multiple = "multiple" name = "00N5e00000YsxRf" title = "Games" >  <option value = "League of Legends" > League of Legends </ option >
                                    <option value = "Hearthstone" > Hearthstone </ option >
                                    <option value = "CS:GO" > CS: GO </ option >
                                    <option value = "Fortnite" > Fortnite </ option >
                                    <option value = "Valorant" > Valorant </ option >
                                    <option value = "Teamfight Tactics" > Teamfight Tactics </ option >
                                    <option value = "Heroes of the Storm" > Heroes of the Storm </ option >
                                    <option value = "World of Warcraft" > World of Warcraft </ option >
                                    <option value = "CoD Warzone" > CoD Warzone </ option >
                                    <option value = "DOTA2" > DOTA2 </ option >
                                    <option value = "Apex Legends" > Apex Legends </ option >
                                    <option value = "Rainbow Six Siege" > Rainbow Six Siege </ option >
                                    <option value = "Rocket League" > Rocket League </ option >
                                    <option value = "Minecraft" > Minecraft </ option >
                                    < option value = "GTA" > GTA </ option >
                                    < option value = "Magic the Gathering: Arena" > Magic the Gathering: Arena </ option >
                                    < option value = "Other" > Other </ option >
                                    </ select>  < br />
                                    Developer &amp;
                            App terms:  < input id = "00N5e00000Yv0uE" name = "00N5e00000Yv0uE" type = "checkbox" value = "1" />  < br />
                            <input type = "submit" name = "submit" />
             </ form>
          </div>
        </main>
      );
    }
  }
  
  ReactDOM.render(<SalesForceTestForm />, salesForceTestForm);