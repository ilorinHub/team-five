<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import Tables from "views/admin/Tables.svelte";
  import Maps from "views/admin/Maps.svelte";
  import UploadReport from "views/results/uploadReport.svelte";
  import IncidenceReport from "../views/incidences/IncidenceReport.svelte";

  export let location;
  export let admin = "";
</script>

<div>
  <Sidebar {location} />
  <div class="relative md:ml-64 pt-6 bg-blueGray-100">
    <div
      class="px-4 md:px-10 mx-auto w-full flex flex-col justify-between min-h-screen"
    >
      <Router url="admin">
        <Route path="dashboard" component={Dashboard} />
        <Route path="results/upload" component={UploadReport} />
        <Route path="incidences/upload" component={IncidenceReport} />
        <Route path="settings" component={Settings} />
        <Route path="tables" component={Tables} />
        <Route path="maps" component={Maps} />
      </Router>
      <FooterAdmin />
    </div>
  </div>
</div>
