import React from 'react';

const AdopterData = ({ formData, handleGoBack }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Breed</th>
                        <th>Adopter Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.petName}</td>
                            <td>{data.petType}</td>
                            <td>{data.breed}</td>
                            <td>{data.adopterName}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button onClick={handleGoBack} style={{width:'65%'}}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default AdopterData;
