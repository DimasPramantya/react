import React from "react"
import './style.css'

function Tugas8(props) {
  return (
    <div class="card">
        <h1>Data diri peserta Reactjs</h1>
        <ul>
            <li><span class="bold">Nama Lengkap</span> : {props.name}</li>
            <li><span class="bold">Email</span> : {props.email}</li>
            <li><span class="bold">Batch Pelatihan</span> : {props.batch}</li>
        </ul>
    </div>
  );
}

export default Tugas8;
