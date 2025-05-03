FROM docker.elastic.co/kibana/kibana:8.17.4

COPY ./plugins/elastalertKibanaPlugin-8.17.4.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.17.4.zip
