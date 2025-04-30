FROM docker.elastic.co/kibana/kibana:7.17.24

COPY ./plugins/elastalertKibanaPlugin-7.17.24.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-7.17.24.zip
