import React from 'react';

const ProfilePage = (props) => {
    return (
        <form>
            <label>
                age:
                <input 
                name="age"
                type="number" 
                value={props.currentUser.age} 
                onChange={props.handleChange}
                />
            </label>
            <label>
                Sex:
                <select 
                name="sex"
                value={props.currentUser.sex}
                onChange={props.handleChange}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <label>
                Height in cm:
                <input 
                name="height"
                type="number" 
                value={props.currentUser.height} 
                onChange={props.handleChange}
                />
            </label>
            <label>
                Weight in kg:
                <input 
                name="weight"
                type="number" 
                min="30"
                value={props.currentUser.weight} 
                onChange={props.handleChange}
                />
            </label>
      </form>
    )
}

export default ProfilePage;