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

      <aside groups>
        <ul>

          <!-- add group form -->
          <li form>
            <section borderless add>
                <input type="text" placeholder="Name" />
                <input type="submit" value="Save" />
            </section>
          </li>
          <!-- /add group form -->

          <li status="1">
            <b>Gruppolo</b>
            <div>
              <span icon class="material-icons">edit</span>
              <span icon class="material-icons">delete</span>
            </div>
            
            <!-- edit form -->
            <section edit>
                <input type="text" placeholder="Name" />
                <input type="submit" value="Save" />
            </section>
            <!-- /edit form -->
          </li>
          <li status="0">
            <b>Cani</b>
          </li>
        </ul>
      </aside>

      <section list>
        <ul>

          <!-- add monitor form -->
          <li form>
            <section borderless add>
                <input type="text" placeholder="Name" />
                <select>
                  <option>Gruppolo</option>
                </select>
                <input type="submit" value="Save" />
            </section>
          </li>
          <!-- /add monitor form -->

          <!-- item template -->
          <li>
            <b>Marconitor</b>
            <span>Cani</span>
            <div>
              <span status="-1">Allarm</span>
              <span icon class="material-icons">edit</span>
              <span icon class="material-icons">delete</span>
            </div>
            <!-- delete form -->
            <section fill delete>
              <button normal>Cancel</button>
              <button danger>Confirm and delete</button>
            </section>
            <!-- /delete form -->
            <!-- edit form -->
            <section edit>
                <input type="text" placeholder="Name" />
                <select>
                  <option>Gruppolo</option>
                </select>
                <input type="checkbox" name="status" id="status" />
                <label for="status" type="toggle"></label>
                <input type="submit" value="Save" />
            </section>
            <!-- /edit form -->
          </li>
          <!-- /item template -->

          <li>
            <b>Francionitor</b>
            <span>Quelli belli</span>
            <div>
              <span status="0">Deactivated</span>
              <span icon class="material-icons">edit</span>
              <span icon class="material-icons">delete</span>
            </div>
          </li>
          <li>
            <b>Talebanitor</b>
            <span>Oh no i russi</span>
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
