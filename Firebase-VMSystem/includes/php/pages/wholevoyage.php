<div class="wholevoyage-wrapper">
    <div class="overview-topic">
        <h1>Whole Voyage - Manage Data</h1>
    </div><!--overview-topic-->

    <div class="wholevoyage-content">
        <!-- <table class="table table-dark table-striped" id="wholetable">
            <thead>
                <th>Voyage</th>
                <th>Total Fish Weight</th>
                <th>Delete Voyage</th>
            </thead>
            <tbody id="tbodywhole">
                
            </tbody>
        </table> -->
        <div class="row justify-content-center">
            <div class="col-md-4 mt-5">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Delete Voyage</h4>
                    </div>
                    <div class="card-body">
                        <form class="row justify-content-center" id="deletevoyageform">
                            <div class="alert alert-danger col-md-10" role="alert" id="changeerror">
                                Delete fail. Please Try again!
                            </div>
                            <div class="form-group mb-4 col-md-10">
                                <label for="">Voyage Number</label>
                                <input type="text" name="voyagenumber" class="form-control" id="voyagenumber" disabled>
                                <!-- <span id="voyagenumber"></span> -->
                            </div>

                            <div class="form-group mb-4 col-md-10">
                                <label for="">Size of Fish Stock (kg)</label>
                                <input type="text" name="stocksize" class="form-control" id="stocksize" disabled>
                            </div>

                            <div class="form-group mb-3 text-center">
                                <button type="button" name="deletevoyage" class="btn btn-danger" id="deletevoyage" onclick="deleteVoyage()">Delete Voyage</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div><!--whole-content-->
</div><!--whole-wrapper-->