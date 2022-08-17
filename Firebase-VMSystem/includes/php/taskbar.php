<style>
  .taskbar a{
    color: black;
  }
 
</style>
<div class="taskbar">
  <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="currentvoyage-tab" data-bs-toggle="tab" data-bs-target="#currentvoyage" type="button" role="tab" aria-controls="currentvoyage" aria-selected="false">Current Voyage</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="map-tab" data-bs-toggle="tab" data-bs-target="#map" type="button" role="tab" aria-controls="map" aria-selected="false">Map</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="false">Overview</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="manage-tab" data-bs-toggle="tab" data-bs-target="#manage" type="button" role="tab" aria-controls="manage" aria-selected="false">Manage</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="message-tab" data-bs-toggle="tab" data-bs-target="#message" type="button" role="tab" aria-controls="message" aria-selected="false">Message</button>
      </li>
  </ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
  <div class="tab-pane fade" id="currentvoyage" role="tabpanel" aria-labelledby="currentvoyage-tab">Current Voyage</div>
  <div class="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">Map</div>
  <div class="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="overview-tab">Overview</div>
  <div class="tab-pane fade" id="manage" role="tabpanel" aria-labelledby="manage-tab">Manage</div>
  <div class="tab-pane fade" id="message" role="tabpanel" aria-labelledby="message-tab">Message</div>
</div>
</div><!--taskbar-->