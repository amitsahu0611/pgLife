import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BathroomIcon from '@mui/icons-material/Bathroom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Amenities = () => {
    return (
        <div>
            <section style={{ paddingTop: '100px' }} class="">
                <div style={{ marginTop: '150px', backgroundColor: '#F6F6F6', borderRadius: '3rem' }} class="row pb-5 pt-5 m-auto ">
                    <h1 className='text-center'>Amenities</h1>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <p class="text-black"><BoltIcon />  Power Backup</p>
                            </li>
                            <li>
                                <p class="text-black"><LocalParkingIcon />  Parking</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Common Area</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <p class="text-black"><SignalWifi4BarIcon />  Wifi</p>
                            </li>
                            <li>
                                <p class="text-black"><DesktopWindowsIcon />  TV</p>
                            </li>
                            <li>
                                <p class="text-black"><GasMeterIcon />  Water Purifier</p>
                            </li>
                            <li>
                                <p class="text-black"><RestaurantMenuIcon />  /Dining</p>
                            </li>
                            <li>
                                <p class="text-black"><LocalLaundryServiceIcon /> Washing Machine</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Bedroom</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <p class="text-black"><BedroomChildIcon /> Bed With Mattress</p>
                            </li>
                            <li>
                                <p class="text-black"><AcUnitIcon /> Air Conditioner</p>
                            </li>

                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Washroom</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <p class="text-black"><BathroomIcon />  Geyser</p>
                            </li>
                            <li>
                                <p class="text-black"><WaterDropIcon />  Water Supply</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Amenities