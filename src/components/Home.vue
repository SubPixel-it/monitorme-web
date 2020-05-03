<template>
  <main>

    <div divider>
      <div>
        <section toolbar>
          <input type="search" placeholder="Search monitor…" />
        </section>
      </div>
    </div>

    <div>
      <section list>
        <ul>
          <li>
            <b>Marconitor</b>
            <span>127.0.0.1</span>
            <div>
              <span status="-1">Allarm</span>
              <span icon class="material-icons">edit</span>
              <span icon class="material-icons">delete</span>
            </div>
          </li>
          <li>
            <b>Francionitor</b>
            <span>127.0.0.2</span>
            <div>
              <span status="0">Deactivated</span>
              <span icon class="material-icons">edit</span>
              <span icon class="material-icons">delete</span>
            </div>
          </li>
          <li>
            <b>Talebanitor</b>
            <span>127.0.0.3</span>
            <div>
              <span status="1">Online</span>
              <span icon class="material-icons">edit</span>
              <span icon class="material-icons">delete</span>
            </div>
          </li>
        </ul>
      </section>
    </div>

  </main>
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    title: 'Home'
  }
}
</script>
